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

# ROUTES

<br>
<br>

### Routes work like the Mall Analogy the teacher used

<p>

> **In the shopping mall you have different stores:** <br> > **Each store** has a **unique** specialization like (books,shoes,paper) and each of them has an unique address (like floor, number etc), and this is equivalent to a PORT. Inside of a port there s always a distinct
> service on your pc that does something very specific, for example: you have different PORTS to listen to incoming EMAILS, different ports for accepting a file
> load etc...

<br>

- Each specialized store on the server has its own address, this
  are the programms that run on the server </p>

<br>
<br>
<br>
<br>

# 🏭

### We will be creating a REST API so we will use some 'end points'

- End points like the one here below:

```html
// api is one end point, the other one is: **/api/test**
```

<br>

```javascript
app.get("/api/test", () => {
  console.log("endpoints test is successful");
});
```

<br>
<br>

#### The way we will see if its working, is by doing some request to the port 5000(to mimic it, we will be using the browser)

- type **http://localhost:5000/api/test**

<br>

# 📦

### result

```javascript
[nodemon] starting `node index.js`
Started server on port
DBConnection Successful
endpoints test is successful

```

<br>
<br>

#### Now let's move the endpoints to a _folder exclusively_ for them, as it's not a good idea to add them inside the index.js

<br>

- 1 Create a NEW FOLDER

- 2 Name it: **routes**

- 3 Inside the **routes** create a file, name it **user.js**

- 4 INside the user.js, create the route for a user

<br>
<BR>

# REQ AND RES

#### The req or request:

> is what the user is going to send to us, in the
> form of data, such as: username, email or any input, even emptiness...

<br>

#### The res or response:

> after the req, we are going to send a res or response to the user:

- like so:

```javascript
res.send("user test rainbow cringe is successful");
```

# 🐒

```javascript
//  user.js
const router = require("express").Router();

router.get("/userTest", (req, res) => {
  res.send("user test rainbow cringe is successful");
});
```

<br>
<br>

## EXPORT THE ROUTE

- **module.exports = router;**

```javascript
const router = require("express").Router();

/*
The req or request: is what the user is going to send to us, in the
form of data, such as: username, email or any input, even emptiness...

after the req, we are going to send a res or response to the user:

like so: 

*/

router.get("/userTest", (req, res) => {
  res.send("user test rainbow cringe is successful");
});

module.exports = router;
```

## IMPORT THE ROUTE

- Go to index.js

```javascript
const userRoute = require("./routes/user");
```

#### then use it

```javascript
app.use("/api/user", userRoute);
```

<br>
<br>
<br>

### S o what we have until now:

```javascript
// user.js
// 1 here we require express
const router = require("express").Router();

router.get("/userTest", (req, res) => {
  //2 here we send a response to the req of the user
  res.send("user test rainbow cringe is successful");
});
//3 we export it
module.exports = router;

/*




*/
//index.js

//4 here we require the data from user.js
const userRoute = require("./routes/user");
//
//
//
//dotenv
dotenv.config();
//
mongoose
  .connect(process.env.MONGO_RAINBOW_URL)
  .then(() => console.log("DBConnection Successful"))
  .catch((err) => console.log("error"));

//5 here we use it
app.use("/api/user", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Started server on port`);
});
```

#### Now type this on the browser to see the answer

- **http://localhost:5000/api/user/userTest**

<br>

### result

```javascript
user test rainbow cringe is successful
```
