# COMMON ERRORS

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
<br>
<br>
<hr>
<br>
<br>
<br>
