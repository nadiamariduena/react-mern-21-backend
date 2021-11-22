# 🍦

CHECK THIS SECTION AND MAKE MORE RESEARCH ABOUT THE $in operator, look for more examples

### What is $in in mongoose?

- visit this link [The mongoose $in Operator](https://kb.objectrocket.com/mongo-db/the-mongoose-in-operator-1015)

<br>
<hr>
<br>

## GET all users

#### Again we will not add the 'verifyTokenAndAdmin',because any user can fetch the products

<br>

> So here we are going to have **2 queries**, not only **NEW**
> but we are going to fetch them also by **CATEGORIES**

<br>

- **qNew** stands for **queryNew**

```javascript
//---------------------------------
//           GET all products
//---------------------------------
//
router.get("/", async (req, res) => {
  //
  // qNew stands for queryNew
  // const query = req.query.new;
  const qNew = req.query.new;
  const qCategory = req.query.category;
```

#### So basically we can fetch all products by:

- **createdAt**: (and just 5, we will see it soon )

<br>

- and by their **category**

<br>
<br>

## The way we are going to do this is by adding an array.

- let products;

<br>

```javascript
//
//---------------------------------
//           GET all products
//---------------------------------
//
router.get("/", async (req, res) => {
  //
  // qNew stands for queryNew
  // const query = req.query.new;
  // 1 fetching the data with this vars
  const qNew = req.query.new;
  const qCategory = req.query.category;

  try {
    //2 creating the array
    let products;



```

<br>
<br>

### Focus on step 6:

- You will have to add a condition, which is **({categories})** this categories inside the **Product SCHEMA** specifies that it should be an **array**:

```javascript
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array }, //because it can have more than 1 category
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);
```

<br>

#### so back to the product.js

<br>

```javascript
   //3
    //if there is a query and if this 'qNew', then...
    if (qNew) {
      //4 my products will be ... createdAt '-1 current years' and the limit will be 5 products
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
      //5 if the query isnt qNew, if its query category: qCategory, then
    } else if (qCategory) {
      //6 my products will be ({categories})
      products = await Product.find({
        //7
        categories: {
          //8
          $in: [qCategory],
        },
      });

```

<br>

### So basically we are saying: if the category 'query' which is this one:

- const **qCategory = req.query.category;** is inside this query:

```javascript
categories: { type: Array },
```

### we are going to fetch this products, so the way we will do it, is by saying:

```javascript
    categories: {
          //8
          $in: [qCategory],
        },

/*

Let's use the $in operator.
We can see the $in operator is
assigned to the breed (check the link below, to understand the example) field as an object.

The value of the $in operator is an array
that contains few values. The document
will be matched where the value of the
 breed field matches any one of the values
 inside the array.

 */
```

### What is $in in mongoose?

- READ THE COMMENTED above or visit this link [The mongoose $in Operator](https://kb.objectrocket.com/mongo-db/the-mongoose-in-operator-1015)

## Examples

##### Use the $in Operator to Match Values

- Consider the following example:

```javascript
db.inventory.find({ qty: { $in: [5, 15] } });
//
//

/*

This query selects all documents in the
inventory collection where the qty field
value is either 5 or 15. Although you can
express this query using the $or operator, 
choose the $in operator rather than the 
$or operator when performing equality 
checks on
 the same field.

 
Use the $in Operator to Match Values
 in an Array

*/
```

<br>

<br>

[<img src="img/CREATING-categories.gif"/>]()

#### SO this is what we have:

```javascript
//---------------------------------
//           GET all products
//---------------------------------
//
router.get("/", async (req, res) => {
  //
  // qNew stands for queryNew
  // const query = req.query.new;
  // 1 fetching the data with this vars
  const qNew = req.query.new;
  const qCategory = req.query.category;

  try {
    //2 creating the array
    let products;

    //3
    //if there is a query and if this 'qNew', then...
    if (qNew) {
      //4 my products will be ... createdAt '-1 current years' and the limit will be 5 products
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
      //5 if the query isnt qNew, if its query category: qCategory, then
    } else if (qCategory) {
      //6 my products will be ({categories})
      products = await Product.find({
        //7
        categories: {
          //8
          $in: [qCategory],
        },
      });
      //9
    } else {
      //10 so if there is not specific query by the user,
      // the outcome will be all the products
      products = await Product.find();
    }

    //
    //
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});
```
