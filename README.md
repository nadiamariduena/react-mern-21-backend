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

# 🐝

##### Log in postman to start testing [POSTMAN]("./a_POSTMAN.md")

<br>
<br>

<!-- phase 2 after, default 1 -->

# CART

<br>

- Copy and paste all the data from **product.js**, paste it inside the cart.js, comment everything **but** the **CREATE**

 <br>

 <br>

```javascript
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();
//
//---------------------------------
//             CREATE
//---------------------------------
//
//
// Here we will require the 'verifyTokenAndAdmin', because only the ADMIN can create a product.
//
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  //
  //
  const newProduct = new Product(req.body);
  //
  try {
    // Here we will save the product
    const savedProduct = await newProduct.save();
    // After saving the product, we can send it
    res.status(200).json(savedProduct);

    //
  } catch (err) {
    res.status(500).json(err);
  }
  //
});
//
//
//---------------------------------
//            UPDATE
//---------------------------------
//
// router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
//   //

//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(
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
//     res.status(200).json(updatedProduct);
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
// router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
//   //
//   // Here we will find and delete
//   //  that specific Product/ and all the
//   // schema data that this Product contains
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.status(200).json("Product has been deleted");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// //

// //---------------------------------
// //           GET product
// //
// //---------------------------------
// //

// //
// router.get("/find/:id", async (req, res) => {
//   try {
//     // Find the user(you need of specific .findById() method to find it)
//     const product = await Product.findById(req.params.id);

//     //._doc; will grab the user data from the object in mongoDb
//     res.status(200).json({ product });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //
// //
// //---------------------------------
// //           GET all products
// //---------------------------------
// //
// router.get("/", async (req, res) => {
//   //
//   // qNew stands for queryNew
//   // const query = req.query.new;
//   // 1 fetching the data with this vars
//   const qNew = req.query.new;
//   const qCategory = req.query.category;

//   try {
//     //2 creating the array
//     let products;

//     //3
//     //if there is a query and if this 'qNew', then...
//     if (qNew) {
//       //4 my products will be ... createdAt '-1 current years' and the limit will be 5 products
//       products = await Product.find().sort({ createdAt: -1 }).limit(5);
//       //5 if the query isnt qNew, if its query category: qCategory, then
//     } else if (qCategory) {
//       //6 my products will be ({categories})
//       products = await Product.find({
//         //7
//         categories: {
//           //8
//           $in: [qCategory],
//         },
//       });
//       //9
//     } else {
//       //10 so if there is not specific query by the user,
//       // the outcome will be all the products
//       products = await Product.find();
//     }

//     //
//     //
//     res.status(200).json(products);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
```

<br>

<br>

### Now lets replace a couple of things

- Change all the Product data for **Cart**
- Replace this **verifyTokenAndAdmin** for only **verifyToken**

<br>

```javascript
const Cart = require("../models/Cart");
//---------------------------------
//             CREATE
//---------------------------------
//
//
// Here we will require the 'verifyToken',
// because any user can create a cart.
//
router.post("/", verifyToken, async (req, res) => {
  //
  //
  const newCart = new Cart(req.body);
  //
  try {
    // Here we will save the Cart
    const savedCart = await newCart.save();
    // After saving the Cart, we can send it
    res.status(200).json(savedCart);

    //
  } catch (err) {
    res.status(500).json(err);
  }
  //
});
//
//
```

<br>

---

<br>

### Now uncomment the UPDATE

<br>

- Change the **verifyToken** to **verifyTokenAndAuthorization**

<br>

```javascript
//---------------------------------
//            UPDATE
//---------------------------------
//
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  //

  try {
    const updatedCart = await Cart.findByIdAndUpdate(
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
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});
```

<br>

### DELETE

```javascript
//
//
//---------------------------------
//            DELETE
//---------------------------------
//
//
//
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  //
  // Here we will find and delete
  //  that specific Cart/ and all the
  // schema data that this Cart contains
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
```

<br>

### GET CART

#### Actually its going to be 'GET user Cart'

<br>

> ✋ Here you will have to change a couple of things\_

<br>

- add this: **verifyTokenAndAuthorization**
- change this: **"/find/:id"** for this **"/find/:userId"**, since you are creating

<br>

> The following below has to match with the one we just modified 'above'

- change this: **findById(req.params.id)** for this **findOne({ userId: req.params.userId })**, since you are creating

<br>

```javascript
//---------------------------------
//           GET user Cart
//
//---------------------------------
//

//
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    // Find the cart(you need of specific .findOne() instead of
    // find(), because every user has just 1 cart
    const cart = await Product.findOne({ userId: req.params.userId });

    //._doc; will grab the user data from the object in mongoDb
    res.status(200).json({ cart });
  } catch (err) {
    res.status(500).json(err);
  }
});
```

<br>

### GET ALL

```javascript
//
//
//---------------------------------
//           GET all
//---------------------------------
//here only admin can reach this data
// Because we are going to see all carts of ALL users
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  //
  //
  //
  try {
    const carts = await Cart.find();
    //response successful 200 and will send/show all carts
    res.status(200).json(carts);

    //
  } catch (err) {
    res.status(500).json(err);
  }

  //
  //
});
```

<br>
<br>

### This is what we have

```javascript
const Cart = require("../models/Cart");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();
//
//

//---------------------------------
//             CREATE
//---------------------------------
//
//
// Here we will require the 'verifyToken',
// because any user can create a cart.
//
router.post("/", verifyToken, async (req, res) => {
  //
  //
  const newCart = new Cart(req.body);
  //
  try {
    // Here we will save the Cart
    const savedCart = await newCart.save();
    // After saving the Cart, we can send it
    res.status(200).json(savedCart);

    //
  } catch (err) {
    res.status(500).json(err);
  }
  //
});
//
//
//
//---------------------------------
//            UPDATE
//---------------------------------
//
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  //

  try {
    const updatedCart = await Cart.findByIdAndUpdate(
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
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});
//
//
//
//
//---------------------------------
//            DELETE
//---------------------------------
//
//
//
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  //
  // Here we will find and delete
  //  that specific Cart/ and all the
  // schema data that this Cart contains
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
//

//---------------------------------
//           GET user Cart
//
//---------------------------------
//

//
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    // Find the cart(you need of specific .findOne() instead of
    // find(), because every user has just 1 cart
    const cart = await Product.findOne({ userId: req.params.userId });

    //._doc; will grab the user data from the object in mongoDb
    res.status(200).json({ cart });
  } catch (err) {
    res.status(500).json(err);
  }
});

//
//
//---------------------------------
//           GET all
//---------------------------------
//here only admin can reach this data
// Because we are going to see all carts of ALL users
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  //
  //
  //
  try {
    const carts = await Cart.find();
    //response successful 200 and will send/show all carts
    res.status(200).json(carts);

    //
  } catch (err) {
    res.status(500).json(err);
  }

  //
  //
});

module.exports = router;
```

<br>

---

<br>

# ORDER

<br>

- Copy and paste all the data from **cart.js**, and replace many things, i am not going to explain this because its just like the previous file, so here is the order ready but there will be one more things to add.

```javascript
const Order = require("../models/Order");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();
//
//

//---------------------------------
//             CREATE
//---------------------------------
//
//
// Here we will require the 'verifyToken',
// because any user can create a cart.
//
router.post("/", verifyToken, async (req, res) => {
  //
  //
  const newOrder = new Order(req.body);
  //
  try {
    // Here we will save the Order
    const savedOrder = await newOrder.save();
    // After saving the Order, we can send it
    res.status(200).json(savedOrder);

    //
  } catch (err) {
    res.status(500).json(err);
  }
  //
});
//
//
//
//---------------------------------
//            UPDATE
//---------------------------------
//only admin can update order
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  //

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
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
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});
//
//
//
//
//---------------------------------
//            DELETE
//---------------------------------
//
//
//
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  //
  // Here we will find and delete
  //  that specific Order/ and all the
  // schema data that this Order contains
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
//

//---------------------------------
//           GET user Orders
//
//---------------------------------
//

//
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    // Find the cart(you need of specific .find() instead of
    // findOne(), because user can have MULTIPLE orders
    const orders = await Order.find({ userId: req.params.userId });

    //._doc; will grab the order data from the object in mongoDb
    res.status(200).json({ orders });
  } catch (err) {
    res.status(500).json(err);
  }
});

//
//
//---------------------------------
//           GET all orders
//---------------------------------
//here only admin can reach this data
// Because we are going to see all carts of ALL users
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  //
  //
  //
  try {
    const orders = await Order.find();
    //response successful 200 and will send/show all orders
    res.status(200).json(orders);

    //
  } catch (err) {
    res.status(500).json(err);
  }

  //
  //
});

module.exports = router;
```

 <br>

---

 <br>

### In more of the data we have above, we will add 'stats to the order'

- In this section we will compare our income

```javascript
//
//
//---------------------------------
//        GET MONTHLY INCOME
//---------------------------------
//
// In this section we will compare our income
//
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  // we will compare our income depending of the month
  //1 lets say the current is november
  const date = new Date();
  //2. the below is going to be October
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  // and we also need the PREVIOUS month
  //   3 this is going to be September
  //and as you can see the 3 step connects to the 2 and the second to the 1
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  //now lets a try and catch and AGGREGATE THE DATA
  try {
    //4
    const income = await Order.aggregate([
      //the condition is: createdAt, because if you see
      // the object in mongo, every user has an update, and in the
      // condition we are going to say less than today and 'greater $gte' than last year
      //gte: greater than.
      //5
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        //6
        $project: {
          // take the month number, inside the created update
          //7
          month: { $month: "$createdAt" },
          //additionally we will add sales
          //8
          sales: "$amount", // the amount is inside the order schema
        },
      },
      {
        $group: {
          //group the AMOUNT of the orders
          //9
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
  //
});
//
//
```

<br>
<br>

### Now lets add the routes inside the index.js

- We will add the cart and order

```javascript
//
//      ROUTES
//
//
//
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
//
//

//
//      ENDPOINTS
//
//
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
```

<br>
<br>
<br>

# 🍨

### Now test it in POSTMAN

- create a new request

#### POST

http://localhost:4000/api/orders

body
raw
json

```javascript

{
"userId": "619b7ea02ded069f34d91fa6",
"products": [
{
"productId": "21hehct",
"quantity": 3

},
{
"productId": "21enerandomeproduct",
"quantity": 5

}

],
"amount": 50,
"address": "USA"


}

//----------
Header
//----------


key:token

value: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWI3ZWEwMmRlZDA2OWYzNGQ5MWZhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzU4MDU3NywiZXhwIjoxNjM3ODM5Nzc3fQ.7S0U12s-DlT4nxZyJ4_5oBXJe6BhbcDFrxQhkUjmpTw


```

<br>
<br>

### result

```javascript

{
    "userId": "619b7ea02ded069f34d91fa6",
    "products": [
        {
            "productId": "21hehct",
            "quantity": 3,
            "_id": "619e1bdb3313d8a2b73f6a05"
        },
        {
            "productId": "21enerandomeproduct",
            "quantity": 5,
            "_id": "619e1bdb3313d8a2b73f6a06"
        }
    ],
    "amount": 50,
    "address": "USA",
    "status": "pending",
    "_id": "619e1bdb3313d8a2b73f6a04",
    "createdAt": "2021-11-24T11:02:51.834Z",
    "updatedAt": "2021-11-24T11:02:51.834Z",
    "__v": 0
}
```

<br>
<br>

### the pending

- The pending status has to do with what we have inside the Order.js schema

```javascript
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    //BELOW:its not going to be type:String because at that point
    // We will be using STRIPE, and its going to give us an object with
    // different lines/fields, similar to what i had here.
    // CHECK the Readme:for schemas
    address: { type: Object, required: true }, //after purchasing we will need user address
    status: { type: String, default: "pending" },
```

<br>
<br>

### Lets create 1 more

```javascript
{
"userId": "619b7ea02ded069f34d91fa6",
"products": [
{
"productId": "21hmmmehct",
"quantity": 10

},
{
"productId": "21eneomeproduct",
"quantity": 3

}

],
"amount": 150,
"address": "Belgium"


}

```

#### result

```javascript
{
    "userId": "619b7ea02ded069f34d91fa6",
    "products": [
        {
            "productId": "21hmmmehct",
            "quantity": 10,
            "_id": "619e1db7cc1cb38cc3f47afd"
        },
        {
            "productId": "21eneomeproduct",
            "quantity": 3,
            "_id": "619e1db7cc1cb38cc3f47afe"
        }
    ],
    "amount": 150,
    "address": "Belgium",
    "status": "pending",
    "_id": "619e1db7cc1cb38cc3f47afc",
    "createdAt": "2021-11-24T11:10:47.461Z",
    "updatedAt": "2021-11-24T11:10:47.461Z",
    "__v": 0
}
```

<br>

- Once you have this result, go to mongo and change the data of one product

<br>

[<img src="img/getting_the_orders-POSTMAN.gif"/>]()

<br>
<br>

### Go back to postman, duplicate the request and change the name:

- create a new request

#### GET

http://localhost:4000/api/orders/income

body
raw
json

```javascript



//----------
Header
//----------


key:token

value: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWI3ZWEwMmRlZDA2OWYzNGQ5MWZhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzU4MDU3NywiZXhwIjoxNjM3ODM5Nzc3fQ.7S0U12s-DlT4nxZyJ4_5oBXJe6BhbcDFrxQhkUjmpTw


```

<br>
<br>

#### RESULT

```javascript
[
  {
    _id: 10, //the month
    total: 150, //in october we earne 150
  },
  // last month we go:
  {
    _id: 11,
    total: 50,
  },
];
```

<br>
<br>
