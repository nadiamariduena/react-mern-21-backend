 <!-- 
 styles badge, at the end i decided to custom them like in the commercejs project
 where i had to create a styles.js file and add the styles there then export it as hook
 https://stackoverflow.com/questions/55766980/custom-color-to-badge-component-not-working
 
  <br>


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

<!-- phase 2 after, default 1 -->

# PRODUCT

2:00:51 cors

#### Go to product.js

- Copy all the content from the **user.js** and paste it inside the **Product.js**

- All the commented will stay like that until we need it, you can also delete it or save it somewhere else, I will keep it my read.

<br>

#### Replace and hide certain things

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

##### This has to match the info we added inside the SCHEMA PRODUCT:

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

### 🔴 Possible errors

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
