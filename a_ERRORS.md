# COMMON ERRORS

> When you will start testing in POSTMAN, careful with the colons, brackets or any little mistake as it will create stupid errors that have nothing to do with the code

<br>
<br>
<br>
<br>
<br>

# 🔴 error no.1

#### I get this error sometimes when i do some changes in VS

<br>

```javascript
node:events:356
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use :::3000
    at Server.setupListenHandle [as _listen2] (node:net:1312:16)
    at listenInCluster (node:net:1360:12)
    at Server.listen (node:net:1447:7)
    at Function.listen (/home/dci-st119/Documents/3D-UNITY-BLENDER-REACTVR-ALL/A_REACT_interme/react-mern-21-backend/node_modules/express/lib/application.js:618:24)
    at Object.<anonymous> (/home/dci-st119/Documents/3D-UNITY-BLENDER-REACTVR-ALL/A_REACT_interme/react-mern-21-backend/index.js:51:5)
    at Module._compile (node:internal/modules/cjs/loader:1108:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)
    at Module.load (node:internal/modules/cjs/loader:973:32)
    at Function.Module._load (node:internal/modules/cjs/loader:813:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
Emitted 'error' event on Server instance at:
    at emitErrorNT (node:net:1339:8)
    at processTicksAndRejections (node:internal/process/task_queues:81:21) {
  code: 'EADDRINUSE',
  errno: -98,
  syscall: 'listen',
  address: '::',
  port: 3000
}
```

<br>

## Reason

[nodejs error EADDRINUSE](https://stackoverflow.com/questions/42751932/nodejs-error-eaddrinuse)

<br>

> Your site.js **tries to listen twice on that port or something (another process) is already listening on port** 3000. Find the service and stop/kill it. This command should help:

##### 1.

- lsof -i | grep 3000

<br>

##### 2.

- killall (this one worked for me)

<br>
<br>
<br>
<hr>
<br>
<br>
<br>

# 🔴 error no.2

#### I get this error when trying to send a POST REQUEST in postman

```javascript
keyPattern: {
  username: null;
}
// this error show up when you have either an item or a user with a similar data inside MONGODB or an error insid e the .env.
```

### the set up i have in postman

- the URL: **http://localhost:5000/api/auth/register**

- body
- raw
- JSON

```javascript

{
"username": "carag hol",
"email": "rajopd@gmail.com",
"password": "vvvdorejj"
 }
```

#### then I did the following:

1. created a new collection **(the reason of the mistake)**
2. I set up the POST request
3. then i added the object
4. while being connected to the **PORT 3000** (inside my index.js)
5. inside the console the **server is connected succesfully**

[<img src="img/saving_collection_to_mongo.gif"/>]()

<br>

# 🤦

### I was doing all correctly at one exception, I messed with the variable inside the .env

- in the beginning I had another variable there , the **superFreak** as you can see it in the image(collections), then i changed it to **shop** as seen in the video tutorial, but **I DONT KNOW** if the fact of changing the variable while the server is connected **mess things up**, because after i changed the variable things went wrong.

```javascript

 ongodb.net/shop?retry
```

<br>
<br>

[<img src="img/message-destruct.gif"/>]()

#### Then after many different tests, I decided to change the variable again to see if the problem came from there.

<br>

- So I shut down the server
- I changed the variable to **inspectorgadget**

```javascript

 ongodb.net/inspectorgadget?retry
```

<br>

#### steps:

- then i turned the server **on** again
- I went to postman

- created a new collection
- I set up the POST request
- then i added the object
- while being **succesfully** connected to the **PORT 3000** (inside my index.js)

> **Like so:**

[<img src="img/saving_collection_to_mongo.gif"/>]()

<br>

## JUST TO BE SURE 🐿️

#### I deleted all again, then i repeated the 'steps' from above

- Now i am 100% the **error** came from there

### So after i deleted all a third time, i concluded that the variable you add in the .env (collection related)is the parent collection, and shouldn't be touched, this collection will be parent of all the other you will create in postman

- so when you go to postman when you just added this variable, add the specific name that is inside the **.env**, repeat the steps, and after you send the first data to **MONGO** and that all went well, after that you can add whatever child you want.

<br>
<br>

[<img src="img/saving_collection_to_mongo_after-error-related-to-.env.gif"/>]()

## Links related:

##### [MongoError: E11000 duplicate key error collection: test.users index: email1_1 dup key: { email1: null } [duplicate]](https://stackoverflow.com/questions/59911175/mongoerror-e11000-duplicate-key-error-collection-test-users-index-email1-1-du)

<br>

##### [MongoError code: 11000 - Internal Server Error when adding a new document using mongoose .save()](https://stackoverflow.com/questions/63916280/mongoerror-code-11000-internal-server-error-when-adding-a-new-document-using)

<br>

##### [MongoError: E11000 duplicate key error collection: users index: mobile_1 dup key: { mobile: null }](https://stackoverflow.com/questions/62169061/mongoerror-e11000-duplicate-key-error-collection-users-index-mobile-1-dup-key)

<br>
<br>
<br>
<hr>
<br>
<br>
<br>

# 🔴 error no.3

### 'MongoDB changing Ip', because of this i couldnt connect to mongo and test the "register and login"

#### It started like a normal error, I purposely mistype credentials to see what type of error i get

- This is one of them, most of time i can solve it by correcting the mistyping but sometimes the server is just too busy after the changes, so i have to kill it with this: **killall** or **pkill -f node**, or **killall -9 node** , there are **other options:** [nodemon app crashed - waiting for file changes before starting](https://stackoverflow.com/questions/37486631/nodemon-app-crashed-waiting-for-file-changes-before-starting)

```javascript
[nodemon] 2.0.14
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Backend server is running!
error

```

### 🔴 Unfortunately today it wasn't that easy

- I spend few hours looking for misspellings or errors in the schemas or index.js (just to be sure ), I watched the tutorial once again and i even returned 1 previous step (before the login) to figure it out but unsuccessful, then i concentrated in all the ways to kill the servers but nothing!

[nodemon app crashed - waiting for file changes before starting](https://stackoverflow.com/questions/37486631/nodemon-app-crashed-waiting-for-file-changes-before-starting)

### The reason

- then someone wrote something about the **IP in MONGO**, i didnt even think about that because i specifically added it to something familiar, but when i when to verify any possible change, i realized that **strangely i had another/new ip???** , so after i changed it back to what i had before, it worked again :)

<br>
 
##### This is what the person wrote:

> I haven't used MongoDB for more than a month. So it automatically paused the MongoDB cluster in the MongoDB cloud (atlas). I resumed the cluster and restart the application (along with a recheck of the mongo connection URL which was saved in default.json).

[nodemon app crashed - waiting for file changes before starting](https://stackoverflow.com/questions/37486631/nodemon-app-crashed-waiting-for-file-changes-before-starting)

<br>

#### After you npm start, you should have this again, only difference is that instead of error, you have 'DBConnection Successful'

```javascript
//
//        BEFORE
//
[nodemon] 2.0.14
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Backend server is running!
error




//
//        AFTER
//
[nodemon] 2.0.14
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Backend server is running!
DBConnection Successful
```

<br>
<br>
<br>
<hr>
<br>
<br>
<br>

# 🔴 error no.4

### Errors when testing the UPDATING user

- After setting up the token and the hashing of the password, i continued with the user.js, there i created the **update** router but to complete it I had to create a middleware inside a file called **verifyToken.js**.

<br>

- In there I had to create a first function, this function will be handling the middleware that is going to be used inside the user.js, this middleware contains the authentication header, with the bearer of the token.

- Then a second function that will handle the checking of the user or the admin, all to see if we have the right credentials to proceed with an update.

#### the error

- I had placed a line of code wrongly but then i realize that the problem wasnt just that, but a combination of things.

<br>

> So found One error, due to this I didnt get the data from the user, instead I got a **"token is not valid"**, so I started checking everything and all was fine but the following line of code.

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

<br>

### Follow this steps so that you dont waste time in postman:

<br>

#### Also, check that you have a space between the quotation marks as it represent the space between the bearer and the token code (in postman)

```javascript
const token = authHeader.split(" ")[1];
```

#### ⚠️ Be aware that when you refresh in Visual Studio, changes may cause postman to behave, so for precaution:

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

<br>
<br>
<hr>
<br>

# 🔴 error no.5

## CREATING A NEW PRODUCT

#### If you try to register and log in with a new admin, a(dd the token and the user id in all the requests:POST GET etc) but then you forget to delete the product inside the mongodb, a product that was created with a now deleted user, you will have something like this:

```javascript
{
    "index": 0,
    "code": 11000,
    "keyPattern": {
        "title": 1
    },
    "keyValue": {
        "title": "alexander mcqueen"
    }
}
```

- Just delete the product and create a new product with a new Admin user.
