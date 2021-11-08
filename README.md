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

[<img src="/src/img/compo_after_install_emet.gif"/>]()

<br>

 
 
  
  -->

# 🐻

<!-- phase 2 after, default 1 -->

# MONGO DB

### ⚠️

> If you are already pushing to a respository in Git, i recommend you not to push the database credentials until we have added them inside the **.env** and I also recommend you to check if the **.env** is really ignored by the **.gitignore**.

<br>
<br>
<br>

## 1. Connect to MONGODB

<br>

- Require **MONGOOSE** just like we required **Express**

```javascript
const express = require("express");
const app = express();
//
//
// Mongoose
const mongoose = require("mongoose");

//
const port = 5000;

// (()=> {})  callback function
app.listen(() => {
  console.log(`Started server on port ${port}`);
});
```

<br>
<hr>
<br>

#### 2. Go to the browser to set up the account in MONGODB

- I will create a different repository or branch just for that in the future

<br>

> **SINCE I ALREADY** have a MONGODB account and I have already installed it, i only had to create a new **organization** and then inside the organization a **new project**,

<br>

### SURPRISE BILL 🔴

- Read all and always choose **FREE** because i you dont do it, it can be that you will have a surpirse **BILL**

> It did happen to someone using **firebase** but my teacher told me it can also happen in MONGODB [(check the video)](https://youtu.be/Lb-Pnytoi-8)

<br>

# 🐒

#### Create a new organization:

- Choose _'mongoDB Atlas'_

<br>

[<img src="img/new_organization.jpg"/>]()

<br>

- After that click **next**
- It will give you an option to set permissions, but since we dont have other participants, just click the button **create Organization**

<br>

#### Create a new project

[<img src="img/new_project.jpg"/>]()

<br>
<br>

#### Now build a database

- Go to **Database Access** (left bar) or click in the center button **Add a New Database User**

[<img src="img/build_databse.jpg"/>]()

<br>
<br>

### Once there:

[<img src="img/user_name_pass_for_project.jpg"/>]()

<br>

- Chose the name and the password carefully (even if you can change it at all times, **knowing of course** that you will have to change it as well in the **.env**). This is okay while you are learning but not in serious projects.

<br>

- Once you are ready with the name and the pass click **ADD USER**

<br>
 <br>

### Now go to Network Access (left bar)

- Click in the green button : add IP address

- choose the option : **0.0.0.0** (allow access from anywhere), click **confirm** and you are done.

 <br>
 <br>

#### Now go to DATABASES and click in the center button <u>BUILD A DATABASE</u>

<br>

- CHOOSE FREE 👍

[<img src="img/build_databse2.jpg"/>]()

### SURPRISE BILL 🔴

- Read all and always choose **FREE** because i you dont do it, it can be that you will have a surpirse **BILL**

> It did happen to someone using **firebase** but my teacher told me it can also happen in MONGODB [(check the video)](https://youtu.be/Lb-Pnytoi-8)

<br>

[<img src="img/cluster_free_creation.gif"/>]()

### At this point it will take some time to create the cluster

- **ONCE ITS DONE:** Click on Connect, if it's not ready, it will not give you the option **connect**(just wait 5 mn)

 <br>
 <br>
 <br>
 <br>

### Now that everything is ready

- Click on **DATABASE** then click on **CONNECT**

- ONCE there, grab the **credentials**

[<img src="img/mongo_default_credentials.gif"/>]()

<br>

### Copy the long code and paste it inside the project in VS

<br>

- 1 There are **2 ways** of doing it: the **unsecured** way (inside the index.js), like we will do now

<br>

- 2 The secure way: inside the **.env**

```javascript
// this is what you grabed from your mongoDB account
mongoose.connect(
  "mongodb+srv://lora:<password>@cluster0.ootdz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
```

<br>

### You should make some changes according to the data you inserted in your mongoDB account:

```javascript
// instead of <password> put the  USER password you added there (In the DATABASE section )
mongoose.connect(
  "mongodb+srv://lora:lovely@cluster0.ootdz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
```

### We should also change this:

```javascript
// replace this
myFirstDatabase?retry
// for this or whatever you like
shopRainbow?retry
```

<br>
<br>

### Now type 'npm start'

- You should be getting this:

```javascript
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
Started server on port 5000
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
Started server on port 5000
```

<br>

# 🌈

### Let's handle the errors in case the connection FAILS

- We will be using a **Then** and **Catch**

- **Then** for success

- **Catch** for errors

```javascript
mongoose
  .connect(
    "mongodb+srv://lora:lovely@cluster0.ootdz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("DBConnection Successful"))
  .catch((err) => console.log("error"));
```

<br>

### RESULT

```javascript
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
Started server on port 5000
DBConnection Successful

```

<br>

## 🔴 SECURITY

#### If someone see this key (with the real credentials), everybody can reach your DB and add new collections, documents or editing your docs etc

<br>

> **TO PREVENT THAT**, add the key inside the **.env** and **create a variable** from there that you will **use inside the index.js**

```javascript
//name it the way you want it but logically
 MONGO_URL_DB = mongodb+srv://lora:lovely@cluster0.ootdz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

<br>

### REQUIRE _dotenv_

```javascript
const express = require("express");
const app = express();
// Mongoose
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//
//dotenv
dotenv.config();
```

<br>
<br>

### NOW REMOVE THE CREDENTIAL and add the VAR from the .env file

```javascript
//dotenv
dotenv.config();
//
mongoose
  .connect(process.env.MONGO_URL_DB)
  .then(() => console.log("DBConnection Successful"))
  .catch((err) => console.log("error"));

//
```

### result

```javascript
[nodemon] starting `node index.js`
Started server on port 5000
DBConnection Successful

```

<br>
<br>

### Now modify the following:

```javascript
//BEFORE
const port = 5000;

//
app.listen(() => {
  console.log(`Started server on port ${port}`);
});
//
//
// AFTER
//
// process.env.PORT || 5000 means: if there is not port at our .env file, then ||, use this number: 500
app.listen(process.env.PORT || 5000, () => {
  console.log(`Started server on port`);
});
```
