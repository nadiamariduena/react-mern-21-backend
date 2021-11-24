 <!-- 
First we will turn on the server inside VISUAL STUDIO, after this we will launch POSTMAN and log in MONGO.

in Order to start testing the different HTTP REQUEST
we will need to log in with the 'log in user' from below, but if we dont have any user, we will have 
to register 1, we can first add a user and then go
to mongo and change the admin from false to true, so  that we will have permissions to create products
etc, the other user that we will create will be a normal user with no special permission





REGISTER


POST

http://localhost:4000/api/auth/register

body
raw
json

{"username": "flowerzap",
"email": "flowerzap@gmail.com",
"password": "sohajn"
 }

click:send

------------------------
LOGIN


METHOD: POST

http://localhost:4000/api/auth/login

body
raw
json

{"username": "flowerzap",
"password": "sohajn"
 }

click:send

after that you will get a token inside the result in the pretty  on the bottom of postman

{
    "_id": "619b7ea02ded069f34d91fa6",
    "username": "flowerzap",
    "email": "flowerzap@gmail.com",
    "isAdmin": true,
    "createdAt": "2021-11-22T11:27:28.428Z",
    "updatedAt": "2021-11-22T11:27:28.428Z",
    "__v": 0,
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWI3ZWEwMmRlZDA2OWYzNGQ5MWZhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzY3ODAwMCwiZXhwIjoxNjM3OTM3MjAwfQ.mVnN_T3HUEW1xZip5ENI_cfyMBSHtz_irhVceUkPf9s"
}

So grab the token and use it in the following steps

-------------

GET USER

the id in each of the following request has to match the freshly created and logged user,

so use the users ID and the respective token to that user.

METHOD: GET

http://localhost:4000/api/users/find/619b7ea02ded069f34d91fa6


body
raw
json

{
   "username": "flowerzap"
 }

Header

key:token

value: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWI3ZWEwMmRlZDA2OWYzNGQ5MWZhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzU4MDU3NywiZXhwIjoxNjM3ODM5Nzc3fQ.7S0U12s-DlT4nxZyJ4_5oBXJe6BhbcDFrxQhkUjmpTw

result

{
    "others": {
        "_id": "619b7ea02ded069f34d91fa6",
        "username": "flowerzap",
        "email": "flowerzap@gmail.com",
        "isAdmin": true,
        "createdAt": "2021-11-22T11:27:28.428Z",
        "updatedAt": "2021-11-22T11:27:28.428Z",
        "__v": 0
    }
}


----------------------

GET ALL USERS

GET

http://localhost:4000/api/users?new=true

body
raw
json

{
   "username": "flowerzap"
 }

Header

key:token

value: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWI3ZWEwMmRlZDA2OWYzNGQ5MWZhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzU4MDU3NywiZXhwIjoxNjM3ODM5Nzc3fQ.7S0U12s-DlT4nxZyJ4_5oBXJe6BhbcDFrxQhkUjmpTw

result

[
    {
        "_id": "619b7ea02ded069f34d91fa6",
        "username": "flowerzap",
        "email": "flowerzap@gmail.com",
        "password": "U2FsdGVkX1+Ys7Jmz3+Lfy3mScpwAkn7hd/wfbCtGUE=",
        "isAdmin": true,
        "createdAt": "2021-11-22T11:27:28.428Z",
        "updatedAt": "2021-11-22T11:27:28.428Z",
        "__v": 0
    }
]


-----------------




USER STATS

GET

http://localhost:4000/api/users/stats

body
raw
json

{
   "username": "flowerzap"
 }

Header

key:token

value: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWI3ZWEwMmRlZDA2OWYzNGQ5MWZhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzU4MDU3NywiZXhwIjoxNjM3ODM5Nzc3fQ.7S0U12s-DlT4nxZyJ4_5oBXJe6BhbcDFrxQhkUjmpTw

result

Will show you how many users in the current year but it depends if you added the following inside the user.js:
 const lastYear = new Date(date.setFullYear(date.getFullYear() - 2));

 the 2 means in 2020, you can test it by changing the year of a random user inside mongo

  {
        "_id": 11,
        "total": 1
    }





------------------------

ADD PRODUCT

POST

http://localhost:4000/api/users/stats

body
raw
json

{
"title": "alexander mcqueen",
"desc":  "testo",
"img": "test",
"categories": ["tshirt", "man"],
"size": "L",
"color": "gray",
"price": 148
}



Header

key:token
value: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWI3ZWEwMmRlZDA2OWYzNGQ5MWZhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzU4MDU3NywiZXhwIjoxNjM3ODM5Nzc3fQ.7S0U12s-DlT4nxZyJ4_5oBXJe6BhbcDFrxQhkUjmpTw



 ----------------------


Photographs for projects


FOOD and objects ----------

https://unsplash.com/@imdauphong

general
https://unsplash.com/collections/75589301/bon-apetite

https://unsplash.com/@ikredenets
https://unsplash.com/photos/Jm_SqbqZYkY
https://unsplash.com/photos/DHaZQh7hR2U

https://unsplash.com/photos/xLS_W6RVx-8

https://unsplash.com/@wendish

https://unsplash.com/@stilclassics

https://unsplash.com/@charlesdeluvio

Christmas
https://unsplash.com/@samhoajti


PLACES ---------

https://unsplash.com/@spoelee4



PEOPLE ---------

https://unsplash.com/photos/BVJ5e-Z2zEk
https://unsplash.com/photos/n3GxXpVcTpI

beautiful black women
https://unsplash.com/@raphaellovaski
https://unsplash.com/photos/88IOcZz53eg
https://unsplash.com/photos/Tfbw4CFFPaY

https://unsplash.com/photos/DTdkZzXYhKI

https://unsplash.com/@dynamicwang
https://unsplash.com/photos/ISrx6MJ7XXI

---

https://unsplash.com/@kirsimakov

---

https://unsplash.com/@ronmcclenny

---

https://unsplash.com/photos/WJ85c_l6JSE

---

https://unsplash.com/photos/aU_eOcelLhQ


# 🐝

# Let's Begin!

## 1. Install the dependencies

```javascript
// copy and paste the following
npm install @material-ui/core @material-ui/icons   react-router-dom node-sass@4.14.1 styled-components

// npm i styled-components
```

 <br>


### Lets start by creating the pages folder

- create the pages folder
- inside of it, create the Home.jsx

<br>

> Here you can see how the [**emmet extension**](https://code.visualstudio.com/docs/editor/emmet) auto complete and automatically create the import on top of the file

 
<br>

 
 
  [<img src="img/postman-issue-related-to-postman-browser__.gif"/>]()
  


  
  https://code.visualstudio.com/docs/editor/workspace-trust
  

  Un "Bearer Token" est un JSON Web Token dont le rôle est d'indiquer que l'utilisateur qui accède aux ressources est bien authentifié. ... Cet attribut permet d'indiquer que l'accès à ce controller (et donc les méthodes qui le composent) ne peut se faire que si l'utilisateur est authentifié.
------------------------


What is req body in Express?


The req. body object allows you to access data in a string or JSON object from the client side. You generally use the req. body object to receive data through POST and PUT requests in the Express server. ... body object into the console results in the user's email and password.

  -->

# 🐨

##### Log in postman to start testing [POSTMAN]("./a_POSTMAN.md")

<br>
<br>

<!-- phase 2 after, default 1 -->

# PRODUCT

<br>

2:00:51 cors

<br>

#### Go to product.js

- Copy all the content from the **user.js** and paste it inside the **Product.js**

<br>

- ✋ All the commented will stay like that until we need it, you can also delete it or save it somewhere else, I will keep it my read.

<br>

### Replace and hide certain things(we will need it for later)

<br>

```javascript
const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();
//
//---------------------------------
//            UPDATE
//---------------------------------
//
// router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
//   //

//   if (req.body.password) {
//     req.body.password = CryptoJS.AES.encrypt(
//       req.body.password,
//       process.env.PASS_SECRET
//     ).toString();
//   }

//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       //
//       //
//       // admin, all to see if we have
//       // the right credentials to proceed with an update.
//       { new: true }
//     );
//     res.status(200).json(updatedUser);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //

// //
// //
// //
// //---------------------------------
// //            DELETE
// //---------------------------------
// //
// //
// //
// router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
//   //
//   // Here we will find and delete
//   //  that specific User/ and all the
//   // schema data that this User contains
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.status(200).json("User has been deleted");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //
// //
// //
// //---------------------------------
// //           GET user
// //  only the Admin get the user
// //---------------------------------
// //
// router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     // Find the user(you need of specific .findById() method to find it)
//     const user = await User.findById(req.params.id);
//     // grab the password and ...all the data exe. 'others'
//     const { password, ...others } = user._doc;
//     //._doc; will grab the user data from the object in mongoDb
//     res.status(200).json({ others });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// //
// //

// //---------------------------------
// //           GET all users
// //---------------------------------
// //
// router.get("/", verifyTokenAndAdmin, async (req, res) => {
//   const query = req.query.new;

//   try {
//     // Find all the user(no need of specific .findById() method)
//     // the '_id:' operator is used to remove the document ID for a simpler output.
//     const users = query
//       ? // if there is any Query, it s going to return 'await User.find().sort({ _id: -1 }).limit(5)'
//         // if there isnt : any query, its going to return all users like so: await User.find();
//         await User.find().sort({ _id: -1 }).limit(5)
//       : await User.find();
//     //
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// //
// //

// //---------------------------------
// //           GET STATS
// //---------------------------------
// //
// router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
//   const date = new Date();
//   // We will use again the **-1** to return the last year today
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 2));
//   //
//   try {
//     const data = await User.aggregate([
//       //1 here we are going to try to $match the condition
//       //the condition is: createdAt, because if you see
//       // the object in mongo, every user has an update, and in the
//       // condition we are going to say less than today and 'greater $gte' than last year
//       { $match: { createdAt: { $gte: lastYear } } },
//       // 2 and I want to take months number
//       // what we are saying here below is: take the month number
//       // inside the mongo 'createdAt' date
//       {
//         $project: {
//           // take the month number, inside the created update
//           month: { $month: "$createdAt" },
//         },
//       },

//       // AFTER the $project we can 'group'
//       //  the items, the users
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: 1 },
//         },
//       },
//       //
//     ]);
//     //
//     res.status(200).json(data);
//     //
//   } catch (err) {}
//   //
// });
// //

//
//

module.exports = router;
```

<br>
<br>

# CREATE

#### If you notice, inside the user.js we created:

<br>

- UPDATE
- DELETE
- GET USERS
- GET ALL USERS
- GET STATS

<br>

#### Now we will continue with:

- CREATE ✋

<br>

- Add the create request, inside the **product.js**

```javascript
const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//
//          CREATE
//
// Here we will require the 'verifyTokenAndAdmin', because only the ADMIN can create a product.
//
router.post("/", verifyTokenAndAdmin, async (req, res) => {});
//
//

module.exports = router;
```

<br>

#### Now go to the index.js and add the Route there, so that we can see what we do.

```javascript
// 1
const productRoute = require("./routes/product");
//
// 2
//
app.use("/api/products", productRoute);
```

<br>

#### Now go back to the product.js

- SAVE THE PRODUCT

```javascript
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  //
  //1
  const newProduct = new Product(req, body);
  //
  try {
    // 2
    // Here we will save the product
    const savedProduct = await newProduct.save();
    // 4
    // After saving the product, we can send it
    res.status(200).json(savedProduct);

    //
  } catch (err) {
    // 3
    res.status(500).json(err);
  }
  //
});
```

<br>

### Now go to postman and test it

<br>

1. DONT forget to **UPDATE your token** before you add the new request. to get a new token log in in postman (presuming you have all the requests tabs at the left side).

🔴 Dont forget that you have to be logged with an **ADMIN** account as only the admin can create the products, to change the permission go to mongo and replace isAdmin:**false** for **true**, then log in again

<br>

#### Once you have your new token, duplicate the stats request

2. change the request from GET to POST
3. change the url to this: **http://localhost:4000/api/products**

<br>

[<img src="img/ADMIN_create_product.gif"/>]()

4. Now create the object inside the **Body** still in postman.

<br>

<br>

#### This has to match the info we added inside the SCHEMA PRODUCT:

<br>

```javascript
// Product.js
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array }, //because it can have more than 1 category
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
  },



//
//
// POSTMAN
{
"title": "alexander mcqueen",
"desc":  "testo",
"img": "test",
"categories": ["tshirt", "man"],
"size": "L",
"color": "gray",
"price": 148,
}
```

#### After doing like in the video, i got the following error:

```javascript
Could not get response
Error: socket hang up

```

- 🔴 The error was caused because I mistyped a line

<br>

#### RESULT

```javascript
{
    "title": "alexander mcqueen",
    "desc": "testo",
    "img": "test",
    "categories": [
        "tshirt",
        "man"
    ],
    "size": "L",
    "color": "gray",
    "price": 148,
    "_id": "619b7322bf9dafa8b4e98dcd",
    "createdAt": "2021-11-22T10:38:26.074Z",
    "updatedAt": "2021-11-22T10:38:26.074Z",
    "__v": 0
}
```

<br>

## 🔴 Possible errors

<br>

#### If you try to register and log in with a new admin, add the token and the user id in all the request but then you forget to delete the product inside the mongodb, a product that was created with a now deleted user, you will have something like this:

```javascript
{
    "index": 0,
    "code": 11000,
    "keyPattern": {
        "title": 1
    },
    "keyValue": {
        "title": "alexander mcqueen"
    }
}
```

> - Just delete the product and create a new product with a new Admin user. 👍

<br>

[<img src="img/ADMIN_create_product1.gif"/>]()

<br>
<br>
<br>

## UPDATE product

## Now that we have our first product lets implement the rest of the requests (the ones we commented )

#### UNCOMMENT <u>THE UPDATE</u>

- replace this: **verifyTokenAndAuthorization**

- for this: **verifyTokenAndAdmin**

- replace also: **updatedUser** for **updatedProduct**

<br>

```javascript
//
//---------------------------------
//            UPDATE
//---------------------------------
//
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  //
  // WE DONT NEED THE DATA BELOW,
  // because its about passwords  ***
  //
  // if (req.body.password) {
  //   req.body.password = CryptoJS.AES.encrypt(
  //     req.body.password,
  //     process.env.PASS_SECRET
  //   ).toString();
  // }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      //
      //
      // admin, all to see if we have
      // the right credentials to proceed with an update.
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//
```

<br><br>

## DELETE product

```javascript
//
//
//
//---------------------------------
//            DELETE
//---------------------------------
//
//
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  //
  // Here we will find and delete
  //  that specific User/ and all the
  // schema data that this User contains
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
//
```

<br>

## GET product

#### This time we will not add the 'verifyTokenAndAdmin',because any user can reach the products

```javascript
//
//
//---------------------------------
//           GET product
//---------------------------------
//
//
// This time we will not add the 'verifyTokenAndAdmin' because any user can reach the products
// router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {

router.get("/find/:id", async (req, res) => {
  try {
    // Find the product(you need of specific .findById() method to find it)
    const product = await Product.findById(req.params.id);
    //
    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json(err);
  }
});
//
//
```

<br>

# 🍦

## GET all users

#### Again we will not add the 'verifyTokenAndAdmin',because any user can fetch the products

<br>

> So here we are going to have **2 queries**, not only **NEW**
> but we are going to fetch them also by **CATEGORIES**

<br>

- **qNew** stands for **queryNew**

```javascript
//---------------------------------
//           GET all products
//---------------------------------
//
router.get("/", async (req, res) => {
  //
  // qNew stands for queryNew
  // const query = req.query.new;
  const qNew = req.query.new;
  const qCategory = req.query.category;
```

#### So basically we can fetch all products by:

- **createdAt**: (and just 5, we will see it soon )

<br>

- and by their **category**

<br>
<br>

### The way we are going to do this is by adding an array.

- let products;

<br>

```javascript
//
//---------------------------------
//           GET all products
//---------------------------------
//
router.get("/", async (req, res) => {
  //
  // qNew stands for queryNew
  // const query = req.query.new;
  // 1 fetching the data with this vars
  const qNew = req.query.new;
  const qCategory = req.query.category;

  try {
    //2 creating the array
    let products;



```

<br>
<br>

### Focus on step 6:

- You will have to add a condition, which is **({categories})** this categories inside the **Product SCHEMA** specifies that it should be an **array**:

```javascript
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array }, //because it can have more than 1 category
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);
```

<br>

#### so back to the product.js

<br>

```javascript
   //3
    //if there is a query and if this 'qNew', then...
    if (qNew) {
      //4 my products will be ... createdAt '-1 current years' and the limit will be 5 products
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
      //5 if the query isnt qNew, if its query category: qCategory, then
    } else if (qCategory) {
      //6 my products will be ({categories})
      products = await Product.find({
        //7
        categories: {
          //8
          $in: [qCategory],
        },
      });

```

<br>

### So basically we are saying: if the category 'query' which is this one:

<br>

- const **qCategory = req.query.category;** is inside this query:

<br>

```javascript
categories: { type: Array },
```

<br>

### we are going to fetch this products, so the way we will do it, is by saying:

```javascript
    categories: {
          //8
          $in: [qCategory],
        },

/*

Let's use the $in operator.
We can see the $in operator is
assigned to the breed (check the link below, to understand the example) field as an object.

The value of the $in operator is an array
that contains few values. The document
will be matched where the value of the
 breed field matches any one of the values
 inside the array.

 */
```

### What is $in in mongoose?

- READ THE COMMENTED above or visit this link [The mongoose $in Operator](https://kb.objectrocket.com/mongo-db/the-mongoose-in-operator-1015)

## Examples

##### Use the $in Operator to Match Values

- Consider the following example:

```javascript
db.inventory.find({ qty: { $in: [5, 15] } });
//
//

/*

This query selects all documents in the
inventory collection where the qty field
value is either 5 or 15. Although you can
express this query using the $or operator, 
choose the $in operator rather than the 
$or operator when performing equality 
checks on
 the same field.

 
Use the $in Operator to Match Values
 in an Array

*/
```

#### read more: [$in operator](https://docs.mongodb.com/manual/reference/operator/query/in/)

<br>

<br>

[<img src="img/CREATING-categories.gif"/>]()

#### SO this is what we have:

```javascript
//---------------------------------
//           GET all products
//---------------------------------
//
router.get("/", async (req, res) => {
  //
  // qNew stands for queryNew
  // const query = req.query.new;
  // 1 fetching the data with this vars
  const qNew = req.query.new;
  const qCategory = req.query.category;

  try {
    //2 creating the array
    let products;

    //3
    //if there is a query and if this 'qNew', then...
    if (qNew) {
      //4 my products will be ... createdAt '-1 current years' and the limit will be 5 products
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
      //5 if the query isnt qNew, if its query category: qCategory, then
    } else if (qCategory) {
      //6 my products will be ({categories})
      products = await Product.find({
        //7
        categories: {
          //8
          $in: [qCategory], ✋
        },
      });
      //9
    } else {
      //10 so if there is not specific query by the user,
      // the outcome will be all the products
      products = await Product.find();
    }

    //
    //
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});
```

<br>

#### Now lets go to POSTMAN, once there, create a new product, change the categories from man to women , so to see the differences, click send so to save the product inside mongoDB

```javascript
// this will be a new product
{
"title": "kenzo W tshirt",
"desc":  "flower power summer sunshine",
"img": "test",
"categories": ["tshirt", "women"],
"size": "M",
"color": "yellow",
"price": 200
}
```

<br>

#### ONCE You do that Duplicate the Request, and change the name from 'add product' to 'get all products'

- the url stays the same http://localhost:4000/api/products
- but change the method from **POST** to **GET**

<br>

body
raw
json

```javascript

{
"title": "alexander mcqueen",
"desc": "testo",
"img": "test",
"categories": ["tshirt", "man"],
"size": "L",
"color": "gray",
"price": 148
}

//----------
Header
//----------


key:token
value: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWI3ZWEwMmRlZDA2OWYzNGQ5MWZhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzU4MDU3NywiZXhwIjoxNjM3ODM5Nzc3fQ.7S0U12s-DlT4nxZyJ4_5oBXJe6BhbcDFrxQhkUjmpTw
```

#### result

```javascript
[
  {
    _id: "619b819b2ded069f34d91fb2",
    title: "alexander mcqueen",
    desc: "testo",
    img: "test",
    categories: ["tshirt", "man"],
    size: "L",
    color: "gray",
    price: 148,
    createdAt: "2021-11-22T11:40:11.124Z",
    updatedAt: "2021-11-22T11:40:11.124Z",
    __v: 0,
  },
  {
    _id: "619d1a316e567690376613af",
    title: "HIGHNOBILITY thshirt",
    desc: "testo",
    img: "test",
    categories: ["tshirt", "man"],
    size: "L",
    color: "gray",
    price: 148,
    createdAt: "2021-11-23T16:43:29.689Z",
    updatedAt: "2021-11-23T16:43:29.689Z",
    __v: 0,
  },
  {
    _id: "619db422a8ca6c6a8db71d8f",
    title: "kenzo thshirt",
    desc: "testo",
    img: "test",
    categories: ["tshirt", "man"],
    size: "L",
    color: "gray",
    price: 148,
    createdAt: "2021-11-24T03:40:18.317Z",
    updatedAt: "2021-11-24T03:40:18.317Z",
    __v: 0,
  },
];
```
