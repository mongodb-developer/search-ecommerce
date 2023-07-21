// This function is the endpoint's request handler.
exports = async function(payload, response) {
  
  const allProducts = context.services.get("mongodb-atlas").db("mongostore").collection("products");
  
  let searchParameters = EJSON.parse(payload.body.text());
  let {searchTerm, categories, market, showSponsored, page} = searchParameters;
    
  if (searchTerm==="" && categories.length===0 && market !=="") {
       return ({
        maxPages:1,
        products:[],
        displayedProducts:[],
        ok:true
      });
    }
  
 if (categories.includes("Women")){
   categories.push("Damen", "Mujeres", "Mujer", "Femme");
 }
 if (categories.includes("Clothing & Shoes")){
   categories.push("Clothing", "Shoes","Chaussures", "Schuhe", "Zapatos");
 }
 if (categories.includes("Men")){
   categories.push("Hombres", "Homme");
 }
 if (categories.includes("Furniture")){
   categories.push("Muebles", "Möbel");
 }
 if (categories.includes("Bed & Bath")){
   categories.push("Bath", "Bedding","Bedding & Linen",);
 }
  if (categories.includes("Computers & Accessories")){
   categories.push("Computadoras, Componentes y Accesorios", "PC");
 }
 if (categories.includes("Home & Kitchen")){
   categories.push("Home Décor", "Home Furnishing", "Kitchen & Dining", "Patio Furniture & Accessories");
 }
 if (categories.includes("Mobile Phones & Communication")){
   categories.push("Mobiler & tillbehör", "Mobiles & Accessories","Téléphones portables et accessoires");
 }
 
  let products =[];
  
  let broadAggregation = [
    { 
      $search: {
        index:"default",
        compound:{
          should:[],
          filter:[]
        },
        highlight:{path:'main_description'}               // ADDED THIS LINE
      }
    }  ];
    
  if (searchTerm){ 
      const textObject = {
          text:{
            query:searchTerm,
            path: ['name', 'main_description'],
            fuzzy:{maxEdits:1}
          }
        };
      broadAggregation[0].$search.compound.should.push(textObject);
    }
  if (showSponsored){
      const scoreModifier =  {
        text:{
          query:"platinum",
          path:"promotionStatus",
          score:{constant:{value:50}}
        }
      };
      broadAggregation[0].$search.compound.should.push(scoreModifier);
    }
    
  if (categories.length!==0){
    const categoryObject ={
      text:{
        query:categories,
        path:'category'
      }
    }
    broadAggregation[0].$search.compound.filter.push(categoryObject);
  }
  if (market!==""){
    const marketObject ={
      text:{
        query:market,
        path:'marketplace'
      }
    };
    broadAggregation[0].$search.compound.filter.push(marketObject);
  }

  if (!page) page = 1;
  //GET 8 PRODUCTS PER PAGE
  const nPerPage = 8;
  let maxPages;
  let numProducts;
  
  const skipStage = {
      $skip:(page-1)*nPerPage
  }
    
  const limitStage = {
     $limit:48
   };
   
  const projectStage ={
    $project: {
      name: 1,
      main_image_url: 1,
      sponsored: 1,
      price: 1,
      category: 1,
      marketplace:1,
      main_description:1,
      score: {
        '$meta': 'searchScore'
      },
      highlights: {                       // ADDED THIS
        '$meta': "searchHighlights"
      }
    },
   };
   
  broadAggregation.push(limitStage, projectStage);
     
    if (searchTerm==='') {
      products = await allProducts.find({}).toArray();
    } else  {
      products = await allProducts.aggregate(broadAggregation).toArray();
    }
     
     
  let displayedProducts = products.slice(((page-1)*nPerPage), nPerPage*page);


  numProducts = products.length;
  maxPages = parseInt(Math.ceil(numProducts/nPerPage));
  console.log("MAX PAGES");
  console.log(maxPages);
  console.log(numProducts);
  
   console.log(JSON.stringify(broadAggregation));
 
      return ({
        maxPages,
        products:displayedProducts,
        ok:true
      });

 
 
};