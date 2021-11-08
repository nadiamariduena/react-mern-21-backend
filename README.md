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

# EXPRESS

#### 1. Create the Express server

<br>

```javascript
// 1 here we are importing express
const express = require("express");
// 2 here we use express
const app = express();
```

<br>

- But to run the **app**, we should LISTEN our server(it can be any number: port 5000 or port 3000)

```javascript
const express = require("express");
const app = express();

//
const port = 5000;

// (()=> {})  callback function
app.listen(() => {
  console.log(`Started server on port ${port}`);
});
```

<br>

> **If you are using another terminal, it can cause problems** when using the same **PORT number**, you can kill it with the following: (you will add it first in the **package.json**)

```javascript
  "scripts": {
    "killnode": "lsof -ti :5000 | xargs kill "
  },
```

<br>

# 🌈

# To Kill a process

<br>

- **If you are using a port for example : port 5000**, no other program can use this port,even if you try to open it in another Terminal it will continue to cause trouble

<br>

#### And you will use it like so:

```javascript
lsof -ti :5000 //_1_

kill 11801 //_2_

// SHORT WAY

lsof -ti :5000 | xargs kill
// this is the command to do all in 1 line
// ADD THIS in the json for reference
//  "killnode": "lsof -ti :5000 | xargs kill "

```

<br>
<hr>
<br>
