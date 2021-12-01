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

# NOVE

#### This is Backend related to the _NOVE_ e-commerce store that you can find here: [NOVE frontend](https://github.com/nadiamariduena/react-mern-21-frontend)

<br>

- **Before merging** the front and the backend, I had to create a test application to check **stripe payments** connection. You can see the test app **[here](#stripe)**

<br>

- Find the working **progress** of the merging phase: **[here (private)](https://github.com/nadiamariduena/merging-back-frontend-mern2021)**

<br>

[<img src="img/nove-store1.gif"/>]()

<br><br>

---

<br>

<br>

# INDEX

<br>

- All the **Branches** containing the **process:**

<br>

##### [Default / installation](https://github.com/nadiamariduena/react-mern-21-backend/tree/default-1)

##### [express / Server](https://github.com/nadiamariduena/react-mern-21-backend/tree/default2-express)

##### [MongoDb / connection](https://github.com/nadiamariduena/react-mern-21-backend/tree/default3-mongoDB-init)

##### [POSTMAN / routes ](https://github.com/nadiamariduena/react-mern-21-backend/tree/routes-4-default)

##### [POSTMAN / routes ](https://github.com/nadiamariduena/react-mern-21-backend/tree/shemas-5)

##### [ROUTES / Schemas ](https://github.com/nadiamariduena/react-mern-21-backend/tree/6-register-and-logout)

##### [SON Web Token (JWT) ](https://github.com/nadiamariduena/react-mern-21-backend/tree/7token-integration-secret-key)

##### [UPDATE /DELETE / (JWT) ](https://github.com/nadiamariduena/react-mern-21-backend/tree/8-update-router-and-middleware-token-bearerr)

##### [ADMIN /verify admin / get all users ](https://github.com/nadiamariduena/react-mern-21-backend/tree/9-admin-permissions-verify-admin-delete-update)

##### [PRODUCT /create / update ... ](https://github.com/nadiamariduena/react-mern-21-backend/tree/10-products-categories)

##### [CART /create / update / order ](https://github.com/nadiamariduena/react-mern-21-backend/tree/11-cart-and-order)

##### [STRIPE ](https://github.com/nadiamariduena/react-mern-21-backend/tree/12-STRIPE-END)

<br><br>

---

<br>

<br>

## 📓 NOTES:

<br>

##### [All the errors](https://github.com/nadiamariduena/react-mern-21-backend/blob/master/a_ERRORS.md)

##### [Mongo](https://github.com/nadiamariduena/react-mern-21-backend/blob/master/a_MONGO-TOPICS.md)

##### [Testing POSTMAN](https://github.com/nadiamariduena/react-mern-21-backend/blob/master/a_POSTMAN.md)

#### [Refreshing ](https://github.com/nadiamariduena/react-mern-21-backend/blob/master/a_REFRESH.md)

#### [To Read ](https://github.com/nadiamariduena/react-mern-21-backend/blob/master/a_TOREAD_.md)

#### [To Review](https://github.com/nadiamariduena/react-mern-21-backend/blob/master/a_To-REVIEW.md)

<br>

<br>
<hr>
<br>

# stripe

### THE TEST APP ✋

#### To test this project, I created a test App that you can see here: [Test transaction | stripe](https://github.com/nadiamariduena/test-transaction-mern2021)

[<img src="img/history-success.gif"/>]()

<br>

<br>
<hr>
<br>

## CREDITS > TEACHER:

Big thanks to **[Lama Dev](https://www.youtube.com/channel/UCOxWrX5MIdXIeRNaXC3sqIg)** , for sharing this **Great tutorial** on how to set up an E-commerce store using: **MERN e-commerce App with STRIPE**.

##### [Official project repository](https://github.com/safak/youtube/tree/mern-ecommerce-app)

<br>

##### [React Node.js E-Commerce App Full Tutorial (REDUX - Stripe - JWT ) - MERN Stack Shopping App](https://youtu.be/y66RgYMAgSo)

<br>
<hr>
<br>
