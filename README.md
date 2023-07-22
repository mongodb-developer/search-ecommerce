## AI/ML ECommerce Demo

Overview

Initially built for .local NYC ‘23, this ecommerce demo serves to inspire our developer audience to imagine just a few of the endless possibilities of how to inject Batch AI, Real time AI, and Generative AI into an ecommerce application.

- Custom Product Recommendations

- Instant Lost Item Cart Updates
- Interactive Chat and Vector Search for Private Enterprise Data

The MongoStore illustrates how working with MongoDB and AI can create a meaningful, custom user experience and accelerate development and time to value for the business.



Video Walk-through of demo:

<https://drive.google.com/file/d/1dwtrRbHRW4_WLiXvs-PY1uIh_NHlakM-/view?usp=drive_link>

This document is composed of the following parts.

- [Resources & Links](https://docs.google.com/document/d/1DNJIztqNQhZy5WF8sKDzRSpA6hw46r9fPUclte0PyDA/edit#heading=h.n7l3as6puoof)

- [Feature Examples Walk-through](https://docs.google.com/document/d/1DNJIztqNQhZy5WF8sKDzRSpA6hw46r9fPUclte0PyDA/edit#heading=h.wx34jaytz56)

  - [Analytics](https://docs.google.com/document/d/1DNJIztqNQhZy5WF8sKDzRSpA6hw46r9fPUclte0PyDA/edit#heading=h.82a24n1yiup2)
  - [Batch AI for Product Recommendation Predictions](https://docs.google.com/document/d/1DNJIztqNQhZy5WF8sKDzRSpA6hw46r9fPUclte0PyDA/edit#heading=h.mv20x4c3mpoz)
  - [Real time AI for Lost Item Cart Updates](https://docs.google.com/document/d/1DNJIztqNQhZy5WF8sKDzRSpA6hw46r9fPUclte0PyDA/edit#heading=h.y3jugvczgo75)
  - [Generative AI for interactive chat and product suggestions based on private data](https://docs.google.com/document/d/1DNJIztqNQhZy5WF8sKDzRSpA6hw46r9fPUclte0PyDA/edit#heading=h.1ofx8nw7vf98)

- [How to Recreate on Your Own Atlas Cluster](https://docs.google.com/document/d/1DNJIztqNQhZy5WF8sKDzRSpA6hw46r9fPUclte0PyDA/edit#heading=h.by3x5q93vwrm)

- [How to Customize](https://docs.google.com/document/d/1DNJIztqNQhZy5WF8sKDzRSpA6hw46r9fPUclte0PyDA/edit#heading=h.yts3j8jfoutz) - (_just in case you don’t like being called “Karen”)_

  - [Change the User and Product Recommendations](https://docs.google.com/document/d/1DNJIztqNQhZy5WF8sKDzRSpA6hw46r9fPUclte0PyDA/edit#heading=h.6pydva3afnek)
  - [Change the Chat Content ](https://docs.google.com/document/d/1DNJIztqNQhZy5WF8sKDzRSpA6hw46r9fPUclte0PyDA/edit#heading=h.rduptk1ux7o5)

## Resources & Links

Link to live application (same link - bit.ly easier to remember):

<https://bit.ly/MDB_AIML>

<https://mongostore-elxkl.mongodbstitch.com/>

Video Walk-through of demo:

<https://drive.google.com/file/d/1dwtrRbHRW4_WLiXvs-PY1uIh_NHlakM-/view?usp=drive_link>

Karen Script:

[Karen’s Script v4](https://docs.google.com/document/d/1X5qHaqv3VMROA_A3H9JGq7cS5TBXRrp60RCQhWs64yc/edit?usp=sharing)

## Features

In this example, MongoStore, an online retailer, can capture a customer’s activity, such as clicks, views, purchases, etc. The application can then apply training models, both batch and in real-time, to make product recommendations custom for this user. If items in the customer’s cart go out of stock, MongoStore can immediately recommend similar products, thus reducing friction for the user.

Finally, MongoStore integrates ChatGPTto allow the customer to interact in a very natural way with MongoStore, asking for advice. MongoStore responds by generating new content (hence “generative” AI) in the form of advice. It also searches MongoStore’s private data, whether in the product collection, previous reviews from other customers, Q&A, etc, to offer even more specific product suggestions.

### Feature 1: Batch Predictive AI - Product Recommendations

Login and compare 2 different user’s product recommendations:

![](https://lh3.googleusercontent.com/r_xXDCDG775_XdQj0aqa07LEw9wl0aezYEAZfHeTCRMRzbfUiLTL9S09OHXXllZ2rJo7fxP8tJGuRVRu8IW2Z8LHAc2qMPO52gMXCZkFSCaszzjt6_PfJaCDQbqrLSAZw_vw42SuFZRwbWt2v4VIiTI)

|                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- |
| _Note to Presenter:\_\_In the code, when logging in, the user email must match exactly but the passwords can be anything._ |

**User Profile 1:** - (This user would be a good one to change as a speaker, ex. “Logging into my account - and modify the code as per instructions below)

[karen@gmail.com](mailto:karen@gmail.com) (MUST)

Password: &lt;type anything - just hit enter >

![](https://lh4.googleusercontent.com/JmpFPE-K0rvBRNt26PYdTgQ8ehXW5uAi5jH7apc9cxG2SyN_lgw_OM3_zi1gMN0Y-NqtEXCJ49FubtE20W-VzrqbdCXeZz2asjzQKqA5YP6DOgIZdQ8izfTu-M0RhUXacMvCmc4nDVLKO7oRWjVH92U)

**User Profile 2: Our buddy Scott on his first camping trip**

[scott@streammeup.com](mailto:scott@streammeup.com)

Password: &lt;type anything - just hit enter >

![](https://lh6.googleusercontent.com/wbShTOyAZbH2Rlp5jxCYN_148VddwhJxUJxJSEL3LD_OkGXWMbO3SAanW33T7LncR7m9BQzZN8m1FLs5G6glpvoqjNdUJ4kXGiJabN4gf6xwOAAvXjpxJ0Hd3FHIAmYehyJUgNjFuISsFVjh3ZhhcNU)

## Feature 2: Traditional Analytics - Customer Behavior Activity

Click on the user profile and simple 1 sentence : Because we have been capturing data about the user’s interactions with the application…. And close.

Can use for either User 1 or User 2

![](https://lh6.googleusercontent.com/VLwbn4O711w-oxi-GcmibLvo5_95hRdfaX9Dn-3kl6I9vWRIrFu3y8Ewy1s5xS0D3iWN_N3rUoPL_-XqjTBZ8tLO1y_NsCvPiha4JU9jYRD__ZF_XpkHPRPACUZrzTrRR9sM_XhoD3PeA0JeayZMR10)

## Feature 3: Real-time AI - Lost Item in Cart Update

|                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Step 1:**Once logged into Scott’s account, show the items he has in his shopping cart:- Tent - Hiking shoes - headlamp                                                                                                                                                   | ![](https://lh6.googleusercontent.com/wkq_SWI3fza_NDsNB_Wjjo5yk28XF0n2MDujqEX0EPAEkgGPoVFZhV1Thu0TAvZeDsXhO4ytibSd-lhmbeq980DQsRkHxl853PHPNYyuAQO_TX1WZmUltkQ-m_lnHUxSbaILj9d4kQKyzi7JwFGDozw) |
| **Step 2:**3 seconds afterwards (no user interaction necessary), the headlamp will go out of stock and Scott will be prompted with similar items as replacements.Generated by live click data about these products from all users being streamed into a real time engine…  | ![](https://lh6.googleusercontent.com/ElLh9WvMyzgku_18AYD3w5ujy-YOK2pV08E6lKo_HPVjLtL_FNi5wYIhwD8At_MsOZuudAeYlwVMdlJtdkr2UZTT-nXLhwn7XenBv5p_fekwE7oxZ5ipEP9wvdeEd8Sie9xBqAY7R3m1LEndDw5QwWc) |

## Feature 4: Generative AI - ChatGPT Prompted with Store Data 

![](https://lh5.googleusercontent.com/Nv02RfiJxa7_48G9h2SaJmE6uRmoD41-DzzFR55aEZpR29kUYI8LI6AEEDyobxRns7iyPi-Ipm1LZe2e3YTVB_PW2VVa_aDqenWimeMxwrC-3pLHQY0Jpccy--gB9SF-zb9nA1jByED4Aox0gNZk85E)

|                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------- |
| _Note to Presenter:\_\_For these questions, you can type anything in the message box, but the answers are hard-coded to always be the same._ |

**Scott’s Question 1:**

**What should I wear when hiking, and it is really hot outside?**

![](https://lh6.googleusercontent.com/eN2zH-PjpRiU5C8eqIVJqYRTx1EdedgT9nAMXlPv6Utp-AyaANhEDKDt4vB2w6prXvwSF6dbo29gzTjdwcY8EFuvUfdHC0Oq5DdrehgRQx9IYJExH4ZYvkaqMjdfI150G3Ytr-BWReRs9B3oLjAI5pM)

**Scott’s Question 2:**

**And it’s raining, too**

\***\*![](https://lh5.googleusercontent.com/7Qx3LDjWH83m22Ql0qyNcpodA9cxuECI4bCnerAkNEBQ1r8f0N21Z0_ZMfHMXRE6BQFNZmaXqjI7kUZ_Ona-Ab4OOhk77aGB6VCuAeq3trvmlGX7vEojr71zBKYJQLp8VMoHFe2-WO7bavvdyJDpQWM)\*\***

**Click See More:**

\***\*![](https://lh5.googleusercontent.com/7CMtC_c7zysNnu8A9c7ioRdcXa1berIH_lp81B3XJfz1u36Ac6Sf_le-DERK0TiSzjP37GI1WLd34j6nGcXHqHdB-A3qdF5D42FIJ87RVBy2-6JJADXIUZZW8fOi1Lz4MSct4oLNxii4VHZGugOo3Vk)\*\***

# How to Recreate the AI/ML E-Commerce Demo

All the code for the front end, backend, and data can be found here:

REPO: <https://github.com/mongodb-developer/search-ecommerce>

The application can be built and run entirely serverless using MongoDB’s App Services. Below is the simple architecture:

![](https://lh4.googleusercontent.com/zX8mS-MaGlaz2rOgqQ_tx5mSuiAL-_G7lgVWBWzelqfYlgHriY22cPEmfADmHRjdGoVkUMa5AX4tucMUEylVdXVPpqZwOGmRDY48pKFnka_KV5AMFbZFejMWwj5b4DwVnYLabfHphv-CJsIS7HRTIXQ)

App Services Functions and Atlas Cluster Data

Both the Atlas data and the function code for MongoStore can be found in the **data-functions** branch of the repo:

<https://github.com/mongodb-developer/search-ecommerce/tree/data-functions>

#### Step 1. Prepare Data in MongoDB Atlas

Stand up an Atlas cluster. Create a database named “mongostore” with 2 collections “products” and “customers” with the .json files in the git repository.

|                                                                                                                                                                                                |                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| ![](https://lh5.googleusercontent.com/HmJnvPat7QlJiSx1vyVKX5QHQ8vJmhPbO6BpTg2EOX9ZeM86OEwycEoo17rdw-OCYyRfVp3Y6UySr1CQN8a6Uz8LG8uuoq9r97XnzjYCZNA7yByVAsiI_-xp09DJ5q9G0k_Cpe-BQUom3C7d4Lgk864) | Database:  mongostoreCollections: products customers |

#### Step 2. Create Search Index named “default” on products collection 

The default dynamically mapped index will work but this one is more specific. Make sure to name the index “**default**”.

|                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {      "mappings": {    "dynamic": false,    "fields": {      "category": {        "type": "string"      },      "main_description": {        "type": "string"      },      "name": {        "type": "string"      }    }       }} |

Atlas App Services Application - MongoStore

Still working on the backend, let’s turn towards the backend functionality.

#### Step 1. Create an App Services application. 

I named mine “MongoStore,” but it does not matter.

#### Step 2. Create HTTPS endpoints

Create 2 HTTPS Endpoints configured as follows.

1. /products

- POST request
- Respond with JSON result
- Calls getProductsByPage function

2. /users

- GET request
- Respond with JSON result
- Calls getUser function

#### Step 3. Create Functions

Create 2 functions for the corresponding endpoint functionality with the code found in the MongoStore_AppServiceApplication folder:

1. getProductsByPage
2. getUser

MongoStore - The Front End

#### Step 1. Get the Git

Finally download the code found in the git repository <https://github.com/mongodb-developer/search-ecommerce>

$ git clone https&#x3A;//github.com/mongodb-developer/search-ecommerce

$ cd search-ecommerce

$ npm install

$ npm start

The front end and the backend are connected via the endpoints found in the Home.js page.

![](https://lh4.googleusercontent.com/2FH9tzhLcjqybF0XXnSHJjf6Qcjw0UxZSpSQNQfo_3duMjxY08amK8eQ4dZSn5jztYO-klTuBUXszv8Zo9QjQ7nIcd8Qd7XUJebQhb4G9N8UzYx84t3KKRJH7buniMcqtlALq-si22sj0_kGmQpSvaY)

#### Step 2. Insert your own HTTPs endpoints 

Now we will need to connect our newly downloaded front end code to our newly created HTTPs endpoints.

In the front end application code, go to the src/pages/Home.js directory and replace the endpoints found around lines 52 and 55 as seen below with your own.

![](https://lh6.googleusercontent.com/cajaktS1mfQXdzitDTPwCMJrzN3drmJN_vhNcrJ5UvGARxj9NG5YOmMdIkBr-L0XOMEmoTRzypdkSV7vg7uxxVQ_fhOrZ-w55T9RJnGPHKh5zIJwyo9O7DW_0LL7LDGI1K09qEbfelTA2MFHhWVkXsI)

Step 4. Save and run yarn start

Et voila! Log in as [karen@gmail.com](mailto:karen@gmail.com) or [scott@streammeup.com](mailto:scott@streammeup.com). Also, chat away with MongoStore. The experience will always be the same though. To customize the application to provide a different user experience, keep reading!

# How to Customize the AI/ML E-Commerce Demo

Don’t feel like being a “Karen”? Don’t worry. You can easily modify the data and the code to customize the demo for the speaker.

Key Components for Change

In the code found in the git repo, here are the components that make this demo experience easily modifiable:

1. User LogIn:
2. Chatbot.js

## Change the User and User Product Recommendations

To change the customer information and the customer product recommendations, do so in the data. Turn to Atlas in the **customers** collection.

**Sample Document:**

|                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {\_id: ObjectId(‘63229e0ae634e04e58252a74’),address:{},email: “[karen@gmail.com](mailto:karen@gmail.com)”,first_name: “Karen”,last_name: “Huaulme”,image: “https&#x3A;//……”,           …cart: \[{ name: “Super fancy product name”,price: 30,  main_image_url: ”https&#x3A;//….” }, {...}, {...}],recommendedProducts: \[{ name: “Super fancy product name”,price: 30,  category:  “Cosmetics”main_image_url: ”https&#x3A;//….” }, {...}, {...}],} |

1. Change the email to match what you set in the onSubmit function of the Login.js component.

2. Now you can change the user by changing the following fields:

   1. first_name
   2. last_name
   3. image

3. Change the product recommendation in the **recommendedProducts** field:

   1. name
   2. price
   3. category
   4. main_image_url

|                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *Note to Presenter:**There are many different fields, but the yellow ones are the ones needed by the front end.**Price is an integer.**Image is for the user’s profile. Simply the web url of the user.**Suggest to keep no more than* *3 objects in the cart array and* - *6 objects in the recommendedProducts array.*  |

Now you need to update the front end.

In the **Login.js** Component, go to the **onSubmit** function on line 7:

|                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| const onSubmit = (data) => {if (data.email.toLowerCase() === “[karen@gmail.com](mailto:karen@gmail.com)”setCurrentCustID(“63229e0ae634e04e58252a74”);if (data.email.toLowerCase() === “[scott@streammeup.com](mailto:scott@streammeup.com)” setCurrentCustID(“63229e0ae634e04e58252a71”);setShowLogin(false)} |

Hard code the login email to match what you have in the customer document in Atlas.

## Change the Chat and Chat Recommendations

This is actually all hard-coded in the front end. Go to the **Chatbot.js** component. On **line 128** you can find a **messageExchange** array. Presently there are 2 exchanges in the form of objects. You can add as many as you wish.

|                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {index: 0,question: “What should I wear… “,answer: \[ \`blah blah… \`, \`blee blee… \`,\`bloo bloo… \`,],productSuggestions: \[{name: “Zion Shorts”,main_image_url: “https&#x3A;//…..”,price: 60},{...},{..}]} |

To change the responses, change the **answer** field.

The productSuggestions can be changed, as well.
