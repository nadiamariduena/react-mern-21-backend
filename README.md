  <!-- 
 styles badge, at the end i decided to cusrom them like in the ecommercejs project
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
  -->

# 🍯

<!-- phase 2 after, default 1 -->

# ROUTES / FOR THE SCHEMAS

<br>
<br>

### Now that we have the SCHEMAS, lets delete the test routes we have inside the user.js

<br>

- Inside the **routes/user.js**

#### DELETE THE FOLLOWING:

<br>

```javascript
//
//   GET
//
router.get("/usertest", (req, res) => {
  res.send("user test rainbow cringe is successful");
});
//
//   POST
//
router.post("/userposttest", (req, res) => {
  //everytime the user is going to add any input, you
  //should pass   'body'
  const username = req.body.username;
  console.log(username);
});
//
```

 <br>
 <br>

### Now COPY what is left and PASTE it to the new routes, these new routes will match the freshly created SCHEMAS

```javascript
const router = require("express").Router();

//
//
module.exports = router;
```

<br>
<br>

# 🍯 🥛

### CREATE THE ROUTES

> Since we already have the **route** for the user.js, we only have to create the following inside the **routes folder**:

<br>

##### <u>all in lowercase</u>

- cart.js
- order.js
- products.js

<br>

### Now paste this inside each one of them:

```javascript
const router = require("express").Router();

//
//
module.exports = router;
```

<br>
<br>
<hr>
<br>
<br>

# 🤺

### Now that we are ready, lets create the first USER

#### 🔴 Authentication inside the 'user route', is not a good practice, thats why I will create another route.

<br>

- this new route will be called **auth.js**

<br>

- INside the auth.js add the following:

```javascript
const router = require("express").Router();
const User = require("../models/User");

//REGISTER
//post, because the user is going to send username, password and other information
router.post("/register", (req, res) => {
  const newUser = User({
    username: req.body.username, //Here we are grabing the data from
    // the schema inside the models/User.js
  });
});
//
//
module.exports = router;
```

<br>

#### Here we are taking the _data_ from the _schema_ inside the models/User.js

```javascript
 username: req.body.username, //Here we are grabing the data from
  // the schema inside the models/User.js
```

<br>
<br>

### Recapitulating

- this data is requesting information to data in block b

#### block a

```javascript
const router = require("express").Router();
const User = require("../models/User");

//REGISTER
//post, because the user is going to send username, password and other information
router.post("/register", (req, res) => {
  const newUser = User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
});
//
//
module.exports = router;
```

#### block b

```javascript
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true, //unique:we cannot create another username with the same username
      lowercase: true,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean, //because its going to be: TRUE or FALSE
      default: false, // since its false, this user is NOT going to be an Admin
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
```

 <br>
 <br>
 <br>

## Now lets save a User everytime we click 'send' inside of postman, just like we did with the test name to see if postman was actually working:

<br>

- Create an object like the one below **(if you notice we are using the schema structure from block a and b, to add data )**:

<br>

#### Dont click send after you create the object, as we still need to do a last thing.

<br>

```javascript
{
  "username": "lora",
  "email": "lora@gmail.com",
  "password": "1234"
}
```

<br>

### OPEN postman

- WE ARE GOING TO SIGN the .body of data but it doesnt mean that we are creating the **user** in our **DB**, its just a model object, we should send this to our DB

<br>

##### SO HOW ARE WE GOING TO DO THIS?

- We are going to use the **save** method

[possible errors | .save() is not a Function Mongoose](https://www.py4u.net/discuss/1472322)

```javascript
newUser.save();
```

<br>

### But if we do it in that way we are going to have issues 🍌

> The reason for that is that **Save()** is a method on a Mongoose document. The save() method is asynchronous, so it returns a promise that you can await on.

<br>

## > So what is Save() doing here?

<br>

- Since **Save()** is an ASYNCHRONOUS function, every time we save a document, UPDATE, DELETE etc in our **DB**, basically it takes a **couple of miliseconds** it depends on the server, mongo db server etc, so there s not chance to know if something will take time or go wrong.

- So lets say if i write the following:

```javascript
const savedUser = newUser.save();
console.log(savedUser);
```

### Its not going to work because:

- What is going to happens is that its going to directly start this process **const savedUser = newUser.** and after that its going to show the **console.log(savedUser)** but at that moment we dont have **console.log(savedUser)** and that is **because it takes a couple of milliseconds**

<br>

#### To prevent this: we are going to create an async function here

<br>

```javascript
const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const newUser = User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  //
  const savedUser = await newUser.save();
  console.log(savedUser);

  //
});

//
//
module.exports = router;
```

<br>
### what this line below means is:

```javascript
const savedUser = await newUser.save();
console.log(savedUser);
```

- we are going to wait this process **const savedUser = await newUser.** and after that , **IF WE HAVE savedUser** we are going to **console.log(savedUser);**

## But if there is any error, we are going to add a 'try and catch'

```javascript
const router = require("express").Router();
const User = require("../models/User");

//REGISTER
//post, because the user is going to send username, password and other information
router.post("/register", async (req, res) => {
  // the User with the SCHEMA data
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  //

  //

  // error handling
  try {
    const savedUser = await newUser.save();
    //console.log(savedUser);
    res.status(200).json(savedUser);
    //200 is successfully
    // 201 is successfully add
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
  //
});

//
//
module.exports = router;
```

<br>

## SINCE the teacher dont want to spend too much time with the errors, here is a better version of error Handling [(its from a previous project)](https://github.com/nadiamariduena/ecommerce2/blob/master/src/docs/USER_AUTH.md)

- read the comments

```javascript
const express = require("express");
const router = express.Router();
const User = require("../models/user");

//
// the ROUTES are the box receiver of the MODELS data schemas
//
//
router.get("/signin", (req, res, next) => {});

router.post("/signup", (req, res, next) => {
  // the User with the SCHEMA data
  User.findOne({
    /*  if inside the req.body which is the 
    data that the user is sending using the structure inside the schema
    , if in that data there's a similar email,
    then send an error.

    */
    email: req.body.email,
  }).exec((error, user) => {
    if (user)
      // if the user sends an existent email, return 400 status
      return res.status(400).json({
        message: "User already registered",
      });
    //
    //
    const { firstName, lastName, email, password } = req.body;
    //Its says YOU KNOW WHAT create a new User:
    // new User(
    //  "based" on
    //the User model schema in (user.js/models) , and pass inside those guys
    // (req.body);
    //so the data the user is giving:
    const _user = new User({
      firstName,
      lastName,
      email,
      password,
      //   to generate a random number to use in username
      username: Math.random().toString(),
    });

    //                      ** SAVING the DATA **
    //
    // to save the data the user sent, you need the following:
    _user.save((error, data) => {
      // IF ERROR
      // if there s any error in the data, return status 400 and "something went wrong"
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
        });
      }
      // IF SUCCESS , SAVE the data
      if (data) {
        return res.status(201).json({
          user: data,
        });
      }
    });
  });
});

module.exports = router;
```

<br>

# 🐝

## Check all the statuses

> httpstatuses.com is an easy to reference database of HTTP Status Codes with their definitions and helpful code references all in one place. Visit an individual status code via httpstatuses.com/code or browse the list below.

[HTTP Status Codes](https://httpstatuses.com/)

<br>

## Before testing it in Postman, lets handle the routes in the index.js

<br>

```javascript
//---------------------
//   BODY PARSER
//---------------------
// ALWAYS add the BODY PARSER before the routes
//
app.use(express.json());
//
//careful where you position the lines
// they have to match with the organization of the api down
//  below:
// otherwise you will get an error
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

//
//
//
//
app.use("/api/auth", authRoute);
//if you are using a REST API this will be plural: instead of user , users
app.use("/api/users", userRoute);
```

<br>

### Now lets finally go to the POSTMAN

[<img src="img/saving_collection_to_mongo.gif"/>]()
