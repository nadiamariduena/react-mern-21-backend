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

## Node.js E-Commerce App REST API with MongoDB | Shopping API with Stripe & JWT

<br>

[<img src="/src/img/frontend_backend_default1.gif"/>]()

<br>

#### This is the continuation of the project: [react-mern-21-frontend](https://github.com/nadiamariduena/react-mern-21-frontend)

<br>
<br>
<br>
<hr>
<br>

# Let's Begin!

#### 1. If you started like me (adding the frontend folder with all the project, don't do that), if you already did, remove the whole folder and just created a index.js

<br>

- The reason for that is because we need to make the set up to **MONGO_DB**, test the connection, set up the default routes and the server, **BEFORE** we bring the whole **frontend** in.

<br>

#### Remove (keep it somewhere else untill we add it again) the following:

1. package.json
2. package-lock.json
3. public
4. src

<br>

#### 2. At this point you have nothing but the README.md, now you can create the index.js

- Create the **index.js**

<br>

# 🍌

#### 3. Now type 'npm init -y'

<br>

- It will give you the **package.json**

- If you dont add the **-y**, you will have to press enter until it finishes to give you options.

<br>

#### 4. Install the dependencies

```javascript
// copy and paste the following
npm install mongoose dotenv nodemon
// dotenv is to protect sensitive data
// nodemon is to refresh the application,
// you will check the state of it inside
// the terminal here in VS

```

 <br>

#### 5. To test our first steps

- Inside the **index.js**, type: console.log('hello)

- Now go to the console here in **VISUAL STUDIO** and type: node index.js

```javascript
react-mern-21-backend$ node index.js
```

<br>

#### 6. But we can make things easier

- Instead of typing again and again **node index.js**, we can do something better.

<br>

- Replace the following (inside the package.json)

<br>

```javascript
// replace this
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
//   for this
  "scripts": {
    "start": "nodemon index.js"
  },
```

<br>

#### 7. Now the only thing we have to do is type

```javascript
npm start
```

### the result

```javascript
[nodemon] 2.0.14
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
hello
[nodemon] clean exit - waiting for changes before restart
```
