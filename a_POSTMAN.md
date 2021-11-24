<br>

# 🍜

<br>

# POSTMAN

### STEPS

<br>
<br>

> (Presuming you already have postman installed) 🖐️

##### To test the data inside our routes, first thing we will do is turn on the server inside VISUAL STUDIO:

```javascript
nodemon; //without the semi colon
```

<br>

- For **nodemon** to work, we will need to have this in our scripts:

```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js" //this is the commmand you will use: you will type 'nodemon' and that will be all.
  },
    "dependencies": {
    "nodemon": "^2.0.14" //type in the console npm install nodemon
    // https://www.npmjs.com/package/nodemon
  }
```

<br>
<hr>
<br>

### Lets Begin

<br>

- After this, we will launch POSTMAN and log in mongoDB.

> in Order to start testing the different **HTTP REQUEST**
> we will need to log in with the 'log in user' from below, but if we dont have any user, we will have
> to register 1, we can first add a user and then go
> to mongo and change the admin from false to true, so that we will have permissions to create products
> etc, the other user that we will create will be a normal user with no special permission

<br>
<br>

## THE REQUESTS

<br>
<br>

---

#### REGISTER

<br>

- METHOD: POST

http://localhost:4000/api/auth/register

body
raw
json

```javascript
{"username": "flowerzap",
"email": "flowerzap@gmail.com",
"password": "sohajn"
}


```

### click send 🖱️

<br>

#### Now that you have created a new user, grab the following and add it inside the body of the 'log in'

```javascript
{"username": "flowerzap",
"password": "sohajn"
}
```

##### 🔴 Dont use the tokens of this examples as they are just for testings purposes

---

<br>

#### LOGIN

- METHOD: POST

http://localhost:4000/api/auth/login

body
raw
json

```javascript
{"username": "flowerzap",
"password": "sohajn"
}

click:send

after that you will get a token inside the result in the pretty on the bottom of postman

{
"\_id": "619b7ea02ded069f34d91fa6",
"username": "flowerzap",
"email": "flowerzap@gmail.com",
"isAdmin": true,
"createdAt": "2021-11-22T11:27:28.428Z",
"updatedAt": "2021-11-22T11:27:28.428Z",
"\_\_v": 0,
"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWI3ZWEwMmRlZDA2OWYzNGQ5MWZhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzY3ODAwMCwiZXhwIjoxNjM3OTM3MjAwfQ.mVnN_T3HUEW1xZip5ENI_cfyMBSHtz_irhVceUkPf9s"
}
```

<br>

### Now that you have created a new user, grab the token and use it in the following steps

---

#### GET USER

> the id in each of the following request has to match the freshly created and logged user, <br><br> **USE** the users ID and the respective token to that user.

<br>

- METHOD: GET

http://localhost:4000/api/users/find/619b7ea02ded069f34d91fa6

body
raw
json

```javascript
{
"username": "flowerzap"
}

//----------
Header
//----------


key:token

value: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWI3ZWEwMmRlZDA2OWYzNGQ5MWZhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzU4MDU3NywiZXhwIjoxNjM3ODM5Nzc3fQ.7S0U12s-DlT4nxZyJ4_5oBXJe6BhbcDFrxQhkUjmpTw

result

{
"others": {
"\_id": "619b7ea02ded069f34d91fa6",
"username": "flowerzap",
"email": "flowerzap@gmail.com",
"isAdmin": true,
"createdAt": "2021-11-22T11:27:28.428Z",
"updatedAt": "2021-11-22T11:27:28.428Z",
"\_\_v": 0
}
}
```

---

#### GET ALL USERS

GET

http://localhost:4000/api/users?new=true

body
raw
json

```javascript
{
"username": "flowerzap"
}
//----------
Header
//----------

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
```

---

#### USER STATS

GET

http://localhost:4000/api/users/stats

body
raw
json

```javascript

{
"username": "flowerzap"
}

//----------
Header
//----------


key:token

value: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWI3ZWEwMmRlZDA2OWYzNGQ5MWZhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzU4MDU3NywiZXhwIjoxNjM3ODM5Nzc3fQ.7S0U12s-DlT4nxZyJ4_5oBXJe6BhbcDFrxQhkUjmpTw

result

Will show you how many users in the current year but it depends if you added the following inside the user.js:
const lastYear = new Date(date.setFullYear(date.getFullYear() - 2));

the 2 means in 2020, you can test it by changing the year of a random user inside mongo

{
"\_id": 11,
"total": 1
}
```

---

#### ADD PRODUCT

POST

http://localhost:4000/api/products

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

<br>
<br>

---

#### GET ALL PRODUCTS

<br>

- with this you will get all the products (dont forget to replace from post to get)

GET ✋

http://localhost:4000/api/products

```javascript


//----------
Header
//----------


key:token
value: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWI3ZWEwMmRlZDA2OWYzNGQ5MWZhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzU4MDU3NywiZXhwIjoxNjM3ODM5Nzc3fQ.7S0U12s-DlT4nxZyJ4_5oBXJe6BhbcDFrxQhkUjmpTw



```

<br>

#### But now lets get only the new products

- change this from 5 to 1, to only get 1 new product:

```javascript
// inside the product.js
// .limit(5);
 .limit(1);
```

- Then go back to postman and change the **url**

- search for **new**

```javascript
http://localhost:4000/api/products?new=true
```

<br>

#### result

```javascript
[
  {
    _id: "619dc149afb74752b530198f",
    title: "kenzo W tshirt",
    desc: "flower power summer sunshine",
    img: "test",
    categories: ["tshirt", "women"],
    size: "M",
    color: "yellow",
    price: 200,
    createdAt: "2021-11-24T04:36:25.013Z",
    updatedAt: "2021-11-24T04:36:25.013Z",
    __v: 0,
  },
];
```

<br>

#### But now lets get only the products with certain 'categories'

- I only want to show men t-shirts, for that i will go back to postman and change the **url**

- search for **category=man**

```javascript
http://localhost:4000/api/products?category=man
```

<br>

- change this from 1 to 5, to only get the latest 5 products:

```javascript
// inside the product.js

 .limit(5);
```

<br>

#### Result

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
  // --------------
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
  // --------------
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

- You can add as many categories as you want but it has to match this:

```javascript
[
  {
    _id: "619dc149afb74752b530198f",
    title: "kenzo W tshirt",
    desc: "flower power summer sunshine",
    img: "test",
    categories: ["tshirt", "women"], // categories
    size: "M",
    color: "yellow",
    price: 200,
    createdAt: "2021-11-24T04:36:25.013Z",
    updatedAt: "2021-11-24T04:36:25.013Z",
    __v: 0,
  },
];
```

- search tshirt for example **category=tshirt**

```javascript
http://localhost:4000/api/products?category=tshirt
```
