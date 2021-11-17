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

# 🍯

<!-- phase 2 after, default 1 -->

# UPDATE and DELETE

<br>
<br>

#### Now that we have the JWT and <u>the secret key</u> , we can finally continue with the user.js, in this section you will understand better why we are using the JWT

> 🔴 But before: **read** about the MongoDb connection issue in the **errors file**

<br>
<br>

# 🍨

## Go to the routes/user.js

- The first thing that we will set up is the .**put** request, to update the data of the user.

> **The PUT method:** PUT is most-often utilized for **update** capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource.<br><br>
> However, PUT can also be used to create a resource in the case where the resource ID is chosen by the client instead of by the server. In other words, if the PUT is to a URI that contains the value of a non-existent resource ID. Again, the request body contains a resource representation. **Many feel this is convoluted and confusing. Consequently, this method of creation should be used sparingly, if at all.**

##### [READ MORE | Using HTTP Methods for RESTful Services](https://www.restapitutorial.com/lessons/httpmethods.html)

##### [READ MORE | intro-Mongo3](https://github.com/nadiamariduena/database-lessons/tree/master/intro-Mongo3)

<br>
<br>

#### So lets add the PUT method inside the router

<br>

- We will create a function router with **2 arguments**, one will be the **user:id** , the other will be the middleware, **this middleware will verify our JWT.**
  <br>

- the Middleware is going to be created in another file as **verifyToken.js**

```javascript
const router = require("express").Router();

///the first argument will be the (:id, ) ,it is a specific user id
// the second argument(1, second argument)  will be middleware
//  to verify our JWT
router.put("/:id");

module.exports = router;
```

<br>
<br>

### Create a new file inside the routes, it will be called 'verifyToken.js'

```javascript
//1 Here you will import the JWT(json web token)

const jwt = require("jsonwebtoken");

// 2 how are we going to verify the JWT?
// We will set up a middleware then once its ready, we will bring the middleware to the user.js, and we will use this middleware as
// a second argument.
const verifyToken = (req, res, next) => {};
```

<br>

# 🍦

### But why do we need a Middleware?

#### What is a MIDDLEWARE

<u>The middleware has access to the request and response
objects and they can modify the request and response
for things like adding authentication, request headers</u>,
parsing request bodies, handling errors and a whole lot
of other useful & essential functionality to your Node.js
applications.

##### example:

> Otis tries to log in to his bank app to view his profile
> and know how much he’s been paid by Maeve after giving out advice<u>{The client sends a request} before the server sends out his bank profile{response}</u> he is required to be authenticated{middleware function}. **The authentication, in this case, is a middleware function** that must be executed before a response is sent out! \*\*If the middleware function that is being executed doesn’t end the request-response cycle it must call next () to allow the other middleware functions on the queue get executed!\*\*

##### READ MORE : [Understanding Express Middleware{A beginners guide} ](https://dev.to/ghvstcode/understanding-express-middleware-a-beginners-guide-g73)

<br>

##### the page example(not ours)

```javascript
// MIDDLEWARE
app.use((req, res, next) => {
  console.log(req.method, re.path);

  next();
});
```

- From the snippet above **we can note that the middleware is executed every time the application receives a request. This is because we didn't define a specific route the middleware function should run on!** <u>(IN OUR APP its different,as we are already setting it up inside the user.js)</u> to do that, we simply **pass the middleware only in the route we want it to get executed in as the second argument right after defining the route path**!Middlewares can be declared to allow for reusability and to follow the DRY principle in cases where we would be carrying out the same function repeatedly!

<br>
<br>

### _NEXT_ FUNCTION 🌞

The next function is a function in the Express router
which, when invoked, executes the middleware succeeding
the current middleware.

<br>

### _HEADERS_ 🌞

> **1.** HTTP Headers are an important part of the API request and ..response as they represent the meta-data associated with the API request and response. ... Headers carry information for: Request and Response Body. Request Authorization.

##### [Request header](https://developer.mozilla.org/en-US/docs/Glossary/Request_header)

> **2.** The Http2ServerRequest.headers is an inbuilt application programming interface of class Http2ServerRequest within the http2 module which is used to get the request/response headers object..

##### [Node.js Http2ServerRequest.headers Method](https://www.geeksforgeeks.org/node-js-http2serverrequest-headers-method/)

<br>
<br>
<br>

## Now lets Continue

#### 1 Here you will import the JWT(json web token)

```javascript
// 1
const jwt = require("jsonwebtoken");
```

#### 2 how are we going to verify the JWT?

```javascript
// the middleware function
// 2
const verifyToken = (req, res, next) => {};
```

### we will use a Header to get the requests

```javascript
// this is the header with the token that we will be adding in the postman
//3
const authHeader = req.headers.token;
```

#### 'if this exists and its not undefined:'

```javascript
//if there is no 'authHeader', we are going to return 'what is inside the else'
//   4
if (authHeader) {
}
```

<br>

#### "Authorization Required"

```javascript
  } else {
    //   Unsuccessful
    //   401 which is 'not authenticated
    // 5
    return res.status(401).json("Authorization Required");
  }
```

#### So if we have a token, we should verify it:

```javascript
 //6
    //it will verify the token and the JWT_SECRET_KEY, after that
    // if the token, process.env.JWT_SECRET_KEY are incorrect it will send either an error  (err) or (the data of the user, in case of success)

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) =>{}
```

#### this is for the token, so if there is an error such as: 'token expire or wrong token', it will launch the err message

```javascript
// 7
if (err) res.status(403).json("token is not valid");
```

#### the success case is the user data

```javascript
//8. the success case is the user data
//So if everything is good, we are going to assign the user data to our req
req.user = user;
```

<br>

#### after we assign the user data to the req.user

```javascript
      //9 after we assign the user data to the req.user
      //   we conclude it with next(), next is like the
      next();
      //
      //
    });
//
//
//EXPORT
// Since its a function, you will export it like so: { verifyToken }
module.exports = { verifyToken };
```

[<img src="img/relay_game_next-analogy.jpg"/>]()

#### 🔴 the above image is the next() function containing the middleware (this middlewarw is the stick hold by the red ) being send to the user.js (the blue)to be used as the 2 argument.

<br>

<br>

### This is what we have until now

```javascript
//1 Here you will import the JWT(json web token)
const jwt = require("jsonwebtoken");

//
//
//
//
// -------------------------------------------
//
//           VERIFY A TOKEN
//             middleware
//
// -------------------------------------------
//
//
// 2 how are we going to verify the JWT?
const verifyToken = (req, res, next) => {
  //

  //3
  const authHeader = req.headers.token;
  //
  //if there is no 'authHeader', we are going to return 'what is inside the else'
  //   4
  if (authHeader) {
    //   successful

    // So if we have a token, we should verify it:
    //it will verify the token and the JWT_SECRET_KEY, after that
    // if the token, process.env.JWT_SECRET_KEY are incorrect it will send either an error  (err) or (the data of the user, in case of success)
    //6
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      //
      //7 this is for the token, so if there is an error such as:
      //   token expire or wrong token, it will launch the err message
      if (err) res.status(403).json("token is not valid");
      //8. the success case is the user data
      //So if everything is good, we are going to assign the user data to our req
      req.user = user;
      //9 after we assign the user data to the req.user
      //   we conclude it with next(), next is like the
      next();
      //
      //
    });
    //
  } else {
    //   Unsuccessful
    //   401 which is 'not authenticated
    // 5
    return res.status(401).json("Authorization Required");
  }

  //
  //
};

module.exports = { verifyToken };
```

<br> 
<br>
<br>
<br>

## Back to the user.js

##### import the verifyToken.js

```javascript
// import
const { verifyToken } = require("./verifyToken");

const router = require("express").Router();
// 2 arguments
router.put("/:id", verifyToken);

module.exports = router;
```

#### now we can use (req, res)=>{}

- This **verifyToken, (req, res)** is the second argument
- From this 2 argument we will grab the

```javascript
const { verifyToken } = require("./verifyToken");

const router = require("express").Router();
// 2 arguments
router.put("/:id", verifyToken, (req, res) => {
  // If this req. made by the user.id  is equal === to this /:id
  // it means its the same user and he/she is allowed to make updates
  //   to this user information
  // : stand for params
  // i will also check if its an Admin:  || req.user.isAdmin)
  if (req.user.id === req.params.id || req.user.isAdmin) {
    //   in this case we can update our user, but if
    // we write it like so we will repeat ourself
    // So we will create another function inside the
    // verifyToken.js
  }
});

module.exports = router;
```

<br>
<br>

### To prevent of writing this function again and gain we will implement it in one place and then grab the data we need from it every time we need it, a bit like a HOOK

- Go to the **verifyToken.js** and add the following function:

```javascript
//
// -------------------------------------------
//                  2
//           VERIFY A TOKEN
//             Authorization
//
// -------------------------------------------
//

const verifyTokenAndAuthorization = (req, res, next) => {
  //1
  verifyToken(req, res, () => {
    // this is the same function we were creating inside the user.js
    if (req.user.id === req.params.id || req.user.isAdmin) {
      // if the user is an params.id user or if he is an admin, we can continue and make updates
      next();
    } else {
      // If its not :
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

//
// EXPORT the 2 functions
module.exports = { verifyToken, verifyTokenAndAuthorization };
```

<br>
<br>

#### Now go back to the user.js and replace the function we were creating:

<br>

```javascript
//
//          BEFORE
//
router.put("/:id", verifyToken, (req, res) => {
  // If this req. made by the user.id  is equal === to this /:id
  // it means its the same user and he/she is allowed to make updates
  //   to this user information
  // : stand for params
  // i will also check if its an Admin:  || req.user.isAdmin)
  if (req.user.id === req.params.id || req.user.isAdmin) {
    //   in this case we can update our user, but if
    // we write it like so we will repeat ourself
    // So we will create another function inside the
    // verifyToken.js
  }
});
//
//
//
//
//      --------------------------------
//
//                  AFTER
//      --------------------------------
//
//
const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");

const router = require("express").Router();
// 2 arguments
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  //
  //before UPDATING we are going to check the password
  //   the reason for that is because users can change their
  // passwords, so in this case we should also encrypt the password
  //COPY AND PASTE the following: this is inside the auth.js for 'register'.
  //   A
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString();
  }

  //UPDATE USER
  // After step A , we can update the user
  //   step B
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        //the argument that comes after this line:
        //   .findByIdAndUpdate(req.params.id,  will be the thing we will UPDATE
        //    so how i am going to set new information to my user?
        $set: req.body, //basically take everything inside req.body and $set it again
        // but this only is not going to return you a updated user, you have to
        // add the following to conclude it:
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
    //    now handle the catch in case of error
    // step C
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
//

//
```

<br>
<br>

### $set

-If the field does not exist,
**set will add a new field with
the specified value, provided that
the new field does not violate a type
constraint.** If you specify a dotted path
for a non-existent field, $set will
create the embedded documents as needed
to fulfill the dotted path to the field.

##### [set](https://docs.mongodb.com/manual/reference/operator/update/set/)

<br>
<br>

# 🍰

### Let's test it

- I will delete this info (its only for testing purposes)

##### So this is what i have

- This is the data i will like to update, so i will change the email the name and the password

```javascript
{
"username": "saato",
"email": "saz@gmail.com",
"password": "lara"
 }
//
{
    "_id": "6193c9151a871f5aee45d328",
    "username": "saato",
    "email": "saz@gmail.com",
    "isAdmin": false,
    "createdAt": "2021-11-16T15:07:01.020Z",
    "updatedAt": "2021-11-16T15:07:01.020Z",
    "__v": 0,
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTNjOTE1MWE4NzFmNWFlZTQ1ZDMyOCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzcxMDc2NTksImV4cCI6MTYzNzM2Njg1OX0.dXQ716H9cuQrDjs60qvxa2-NneQCIOAxHRU4U-xFxm0"
}
```

<br>
<br>

#### 1. Before we create another request in postman, we will save the login request (click in the button 'save') and call it LOGIN.

- like so:

[<img src="img/UPDATE_token_bearer.gif"/>]()

### 2) Then 'LogIn' again and grab the token (like you see in the img above).

<br>
<br>

#### 3) Since we are using the <u>Bearer</u> we will have to split it in 2 (the bearer and the long code ), a way to do that is to add split to the token

- Go to the **verifyToken.js**
- Add a variable 'token'

```javascript
  //3
  const authHeader = req.headers.token;
  //

  // 9. split the token
  const token = authHeader.split("")[1];
// Split will create an space between the bearer and the token long code, the [1]means that we will grab the token as its the second element (because we dont want the bearer which is pos[0](first element)
//


  //   4
  if (authHeader) {
```

<br>

#### Split will create an space between the bearer and the token long code, the [1]means that we will grab the token as its the second element (because we dont want the bearer which is pos[0](first element)

<br>
<br>

<br>

#### [What is Bearer Authentication?](https://www.devopsschool.com/blog/what-is-bearer-token-and-how-it-works/)

Bearer authentication (also called token authentication) is an HTTP authentication scheme that involves security tokens called bearer tokens. The name “Bearer authentication” can be understood as “give access to the bearer of this token.” The bearer token is a cryptic string, usually generated by the server in response to a login request. The client must send this token in the Authorization header when making requests to protected resources:

###### Authorization: Bearer

The Bearer authentication scheme was originally created as part of OAuth 2.0 in RFC 6750, but is sometimes also used on its own. Similarly to Basic authentication, Bearer authentication should only be used over HTTPS (SSL).

#### What is Bearer token?

Bearer Tokens are the predominant type of access token used with OAuth 2.0. A Bearer Token is an opaque string, not intended to have any meaning to clients using it. Some servers will issue tokens that are a short string of hexadecimal characters, while others may use structured tokens such as JSON Web Token.

#### What is the use of bearer token?

- Bearer Token A security token with the property that any party in possession of the token (a “bearer”) can use the token in any way that any other party in possession of it can. Using a bearer token does not require a bearer to prove possession of cryptographic key material (proof-of-possession

#### Read more: [What is Bearer Authentication?](https://www.devopsschool.com/blog/what-is-bearer-token-and-how-it-works/)

<br>
<br>

#### 4) Once its split go back to postman and change the post to Put, repeat the same,

#### PUT

- body,
- raw,
- json

[<img src="img/UPDATE_token_bearer2.gif"/>]()

##### 🌞

> If you want to pause the gif, convert it into a mp4

```javascript
// verifytoken.js
//1 Here you will import the JWT(json web token)
const jwt = require("jsonwebtoken");

//
//
//
//
// -------------------------------------------
//                 1
//           VERIFY A TOKEN
//             middleware
//
// -------------------------------------------
//
//
// 2 how are we going to verify the JWT?
const verifyToken = (req, res, next) => {
  //
  //option from old project
  // const token = req.headers.authorization.split(" ")[1];
  // [1] is going to grab the token element from the 2 elements here: "Bearer and  token"
  //3
  const authHeader = req.headers.token;
  //

  //
  //
  //if there is no 'authHeader', we are going to return 'what is inside the else'
  //   4
  if (authHeader) {
    // 9. split the token
    const token = authHeader.split("")[1];
    //   successful

    // So if we have a token, we should verify it:
    //it will verify the token and the JWT_SECRET_KEY, after that
    // if the token, process.env.JWT_SECRET_KEY are incorrect it will send either an error  (err) or (the data of the user, in case of success)
    //6
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      //
      //7 this is for the token, so if there is an error such as:
      //   token expire or wrong token, it will launch the err message
      if (err) res.status(403).json("token is not valid");
      //8. the success case is the user data
      //So if everything is good, we are going to assign the user data to our req
      req.user = user;
      //9 after we assign the user data to the req.user
      //   we conclude it with next(), next is like the
      next();
    });
  } else {
    //   Unsuccessful
    //   401 which is 'not authenticated
    // 5
    return res.status(401).json("Authorization Required");
  }
};

//
// -------------------------------------------
//                  2
//           VERIFY A TOKEN
//             Authorization
//
// -------------------------------------------
//

const verifyTokenAndAuthorization = (req, res, next) => {
  //1
  verifyToken(req, res, () => {
    // this is the same function we were creating inside the user.js
    if (req.user.id === req.params.id || req.user.isAdmin) {
      // if the user is an params.id user or if he is an admin, we can continue and make updates
      next();
    } else {
      // If its not :
      res.status(403).json("You are not allowed to do that!");
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuthorization };
```

<br>
<hr>

```javascript
const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");

const router = require("express").Router();
// 2 arguments
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  //
  //before UPDATING we are going to check the password
  //   the reason for that is because users can change their
  // passwords, so in this case we should also encrypt the password
  //COPY AND PASTE the following: this is inside the auth.js for 'register'.
  //   A
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString();
  }

  //UPDATE USER
  // After step A , we can update the user
  //   step B
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        //the argument that comes after this line:
        //   .findByIdAndUpdate(req.params.id,  will be the thing we will UPDATE
        //    so how i am going to set new information to my user?
        $set: req.body, //basically take everything inside req.body and $set it again
        // but this only is not going to return you a updated user, you have to
        // add the following to conclude it:
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
    //    now handle the catch in case of error
    // step C
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
//
/*
  If the field does not exist, 
  $set will add a new field with 
  the specified value, provided that 
  the new field does not violate a type 
  constraint. If you specify a dotted path 
  for a non-existent field, $set will
   create the embedded documents as needed 
   to fulfill the dotted path to the field.

   https://docs.mongodb.com/manual/reference/operator/update/set/
  
  */
//
```

-

#### errors

## 🔴 UPDATE ERROR

- I have found 1 error, due to this i didnt get the data from the user, instead i got a **"token is not valid"**, so i started checking everything and all was fine but the following line of code.

```javascript
  const token = authHeader.split("")[1];
  if (authHeader) {
    //   successful

// replace for this

  //   4
  if (authHeader) {
    //   successful
    const token = authHeader.split(" ")[1];
```

### also, check that you have a space between the quotation marks as it represent the space between the bearer and the token code (in postman)

```javascript
const token = authHeader.split(" ")[1];
```

### ⚠️ be aware that when you refresh in VS, changes may cause postman to behave, so for precaution:

- Every time you save in VS code while you are testing in postman, log in your user (in postman) so to **obtain a new token**

- this new token will be used again inside the header there like in the picture below:

- So when you 'write' Bearer make 1 space(space bar) and then paste the code, check that the url is correct

<br>

[<img src="img/UPDATE_token_bearer3:solved-issue.gif"/>]()

```javascript
// this is the user code:61946be245b0cef659dbe1bb
// you get that code after you register a new user but only when you LOG IN (check the image below)
//
// URL
 http://localhost:2000/api/users/paste the user code here
```

- Dont **re use** PUT requests in postman, its better to create a new request so that there is no issues

<br>

- Avoid saving or making requests in postman when you are in the readme file, to me it causes issues 'sometimes'

<br>

- **careful** when adding the token as sometimes you can confuse the authorization and the headers (as they look similar), and by mistake you add the token inside the "Authorization" instead of the "Headers"
