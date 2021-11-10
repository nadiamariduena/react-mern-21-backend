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
