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
  


  
  https://code.visualstudio.com/docs/editor/workspace-trust
  
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
```

[<img src="img/relay_game_next-analogy.jpg"/>]()

#### 🔴 the above image is the next() function containing the middleware (this middlewarw is the stick hold by the red ) being send to the user.js (the blue)to be used as the 2 argument.

<br>
<br>
<br>
<br>

### Back to the user.js

```javascript

```
