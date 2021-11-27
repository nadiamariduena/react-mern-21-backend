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

# 🍨

##### Log in postman to start testing [POSTMAN]("./a_POSTMAN.md")

###### 1:47:01 [Node.js E-Commerce App REST API with MongoDB | Shopping API with Stripe & JWT](https://youtu.be/rMiRZ1iRC0A)

<br>
<br>

<!-- phase 2 after, default 1 -->

# <u>STRIPE</u>

<br><br>

#### INSTALL STRIPE

```javascript
@stripe/react-stripe-js @stripe/stripe-js
```

> Stripe is a pay-as-you-go payment processing platform with flat-rate, transaction-based fees. Overall, you'll pay 2.9% plus 30 cents per transaction to accept card payments online and 2.7% plus 5 cents to accept in-person payments with Stripe. ... Because it's a payment service provider, it's also fast to set up.

### 🍌

<u>**If your API key is in test mode**, the supplied payment source (e.g., card) won’t actually be charged, although everything else will occur as if in live mode.</u> (Stripe assumes that the charge would have completed successfully).

<br>
<br>

### Start by opening an account there:

<br>

1.  Open an account [STRIPE](https://dashboard.stripe.com/)

2.  Once you got verified (after filling all the required, bank account details etc), click on the developers

[<img src="/img/developers-stripe.jpg"/>]()

<br>

3. Look for the API keys **(in the left side column)**

🔴 Also dont forget to click on **test Mode** before you grab the API keys.

<br>

[<img src="/img/developers-stripe_api.jpg"/>]()

<br>

# 🔑

##### We are going to grab the <u>PUBLISHABLE KEY</u> inside the frontend side and the <u>SECRET KEY</u> inside the backend side

<br>

---

<br>

#### 4. Right now we are going to grab the API key that says: <u>SECRET key</u> copy this copy and bring it to out project.

<br>

> ###### ⚠️ You should never ever Publish this type of sensitive data (keys) or the data that is inside the .env folder, thats why I decided to make this repository private until the project was ready, so that i could replace the sensitive data that i already "commited to git".<br> <br> You can either hide the repo and publish just the code **(without the keys of course)** but by doing that you will lose all the commitments.

<br>

#### [Should I add .env to .gitignore?](https://salferrarello.com/add-env-to-gitignore/)

- Yes there is a **way to replace it but it s hard, in case you already pushed in several branches**, it s easier to just create a new shop in commercejs and stripe to obtain **new keys** to use in a new repo (**of course you will have to delete the old shop so to make the old keys obsolete**)

<br>
<br>

<br>

### Now that we have the key, we are going to add the key inside the .env

```javascript
// related to stripe
STRIPE_KEY = sk_verylongcodeee;
```

<br>

### After you do that

- CLOSE THE TERMINAL /strg+c
- and **relaunch** it /npm start

<br>

---

<br>

# 🍌

## CREATE A NEW ROUTE

> this route will handle the **STRIPE data**

- Once the file has been created, we are going to import **stripe** through the SECRET KEY.

<br>

```javascript
const router = require("express").Router();
//Here we will grab the secret key 'related to stripe' from the .env and pass it inside the 'stripe' variable here below:
const stripe = require("stripe")(process.env.STRIPE_KEY);

module, (exports = router);
```

<br>

### Let's create the first function

- This function will be handling

```javascript
const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

//
//
//
router.post("/payment", (req, res) => {
  //How i am going to charge my clients?
  stripe.charges.create(
    {
      //
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
      //https://stripe.com/docs/currencies
    },
    //
    //
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        //error
        res.status(500).json(stripeErr);
      } else {
        //success
        res.status(200).json(stripeRes);
      }
    }
  );
});

module, (exports = router);
```

<br>

#### Create a [.Charge](https://stripe.com/docs/api/charges/create)

##### what is .charge in Stripe?

- Create a charge 🍨

> To charge a credit card or other payment source, **you create a Charge object**. <u>If your API key is in test mode, the supplied payment source (e.g., card) won’t actually be charged, although everything else will occur as if in live mode.</u> (Stripe assumes that the charge would have completed successfully).

<br>

<!-- ### Now that we connected stripe to our project, we can finally create that handleSubmit function -->

---

<br>

# 🍌

# How to test it?

- Since we are not going to test it in **POSTMAN** anymore we will have to test it in a **REACT APP**

<br>

### CREATE A NEW APP WITH NPX

- We will use this little app to test the transactions

```javascript
npx create-react-app test-transaction-mern-21

```

<br>

### After the app has been created add the following dependencies

```javascript
 "dependencies": {
//other dependencies tha come with the installation ...
//
//
//the dependencies you will need
    "axios": "^0.24.0",
    "dotenv": "^10.0.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0",
    "react-scripts": "4.0.3",
    "react-stripe-checkout": "^2.6.3",
    "stripe": "^8.191.0",
    "web-vitals": "^1.1.2"
  },
  //
  //
  //
```

<br>

#### type: nom install

- to install the new dependencies

<br>

##### After the dependencies are installed, add 3 components.

- one to handle the routes **App,js**
- one to handle the button to pay **Pay.js**
- and one to handle the **Success.js**

<br>
<br>

---

# 👾

#### If you want to follow step by step, click [here](https://github.com/nadiamariduena/test-transaction-mern2021)

---

<br>
<br>

# 🍌

## Lets continue

<br>

- Inside the **App.js** you will add the following:

```javascript
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pay">
          <Pay />
        </Route>
        {/*  */}
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </Router>
  );
};
```

<br>

- Inside the **Pay.js** you will add the following:

```javascript
import { useState, useEffect } from "react";

import StripeCheckout from "react-stripe-checkout";

const axios = require("axios");

const KEY =
  "pk_test_51JrMq0CdM1Odk0RJfHsJPW4taGQUROuQ6g9u3fCch9QU8eHNfuSrh0mGh89PF5g3IO3SPaJBsV2qzHo5Yo6An1qo00zicCUq2p";

const Pay = () => {
  //
  //
  const [stripeToken, setStripeToken] = useState(null);
  // set to (null) because we dont have a token in the beginning
  //
  //
  const onToken = (token) => {
    // console.log(token);

    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        //THE BACKEND REQUEST
        const res = await axios.post(
          // this is really important
          // its the connection to our server
          "http://localhost:9000/api/checkout/payment",

          {
            // this is linked to the stripe.js in our routes
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        //AFTER THE BACKEND REQUEST IS ANALIZED WE WILL RETURN THE RES.DATA

        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    //if there is a stripe token then show the makeRequest function
    stripeToken && makeRequest();
    //
  }, [stripeToken]);

  //
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 
      
              STRIPE BUTTON 
      
       amount={1000} the 2 last ceros are cents

         token={this.onToken}
         this above is linked to the function we 
         are going to create
      */}

      <StripeCheckout
        name="NOVE shop"
        image="https://avatars.githubusercontent.com/u/1486366?v=4"
        shippingAddress
        billingAddress
        description="Your total is 20 euros"
        //allowRememberMe={false}
        data-allow-remember-me="false"
        //
        //has to be the same amount inside the makeRequest function
        amount={2000}
        token={onToken}
        //the public key pk, coming from stripe, placed on top of the file
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: "120",
            borderRadius: "5",
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          PAY NOW
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
```

<br>

### We will encounter some errors ✋

- In my case I had a server error (the solution is not shown in the video tutorial | this error has to do with your server set up)

###### Read about the error and the solution [here](./a_ERRORS.md)

<br>

---

### The end of this phase

- In this link you will find the little app I created to test if the server we created with node worked.

### [Lest go and see if it worked :)](https://github.com/nadiamariduena/test-transaction-mern2021)
