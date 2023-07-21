// This function is the endpoint's request handler.
exports = function({ query, headers, body}, response) {
 

    // get customerID from query parameter
    const {id} = query;

    // Headers, e.g. {"Content-Type": ["application/json"]}
    const contentTypes = headers["Content-Type"];

   const customer = context.services.get("mongodb-atlas").db("mongostore").collection("customers").findOne({_id:BSON.ObjectId(id)});
   const otherCustomers = 
    context.services.get("mongodb-atlas").db("mongostore").collection("customers").find({_id:{$ne:BSON.ObjectId(id)},image:{$exists:true}}).toArray();

    
   
    return  {
      customer,
      otherCustomers
      };
};
