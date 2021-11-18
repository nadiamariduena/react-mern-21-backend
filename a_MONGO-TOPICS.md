# TOPICS I FOUND INTERESTING ABOUT MONGO

<br>
<br>
<br>

## ADMIN / QUERIES

- **RELATED TO:** 9-aggregation-get-admin-and-users-query.find-sort (branch)

<br>

<br>

### I will start it from here as it can be interesting to see it all from where it started.

<br>

<hr>

#### Lets implement it in the App

- to get the **'latest users'** we will do go to the **user.js** and write the following:

```javascript
const query = req.query.new;
```

#### then write the following condition:

##### if there is a query...

```javascript
//  If there is a query, go inside User and find 5
// if you want to change it, its up to you!
query ? await User.find().limit(5)
```

##### if there isn't any query...

```javascript
// if there is no query : then return 'all the users'
: await User.find();
```

<br>

# 🍯

#### But if we do it like that, its going to give us 5 users, we can add .sort() to get the last user (alphabetically)

```javascript
// The sort() method sorts an array alphabetically:
const users = query
  ? await User.find().sort({ _id: -1 }).limit(1)
  : await User.find();
```

<br>

# sort() method in Mongo

##### Sorted collection

> To get a sorted result, we append the sort() method to the end of the search query (find() method). This allows the user to generate a sorted output.

- In this instance, the data is sorted by the “year” field in ascending order.

```javascript
db.vehicleinformation.find({}, { _id: 0 }).sort({ year: 1 });
```

<br>

- The [**{\_id:0}**](https://www.bmc.com/blogs/mongodb-sorting/) operator is used to remove the document ID for a simpler output.

<br>

#### result

[<img src="img/sort_mongo1.png"/>]()

##### source: [MongoDB Sorting: sort() Method & Examples](https://www.bmc.com/blogs/mongodb-sorting/)

<br>

> **Using the sort() method will increase the readability of a query**, which leads to a better understanding of a given dataset. Not only that, sorted data will be used by developers to write more complex algorithms.

<br>

### What is database sorting?

Database **sorting presents data in an ascending or descending order** with relation to the data in a specified field. You can carry out sorting operations on various data types such as:

- Strings
- Integers
- Decimal
- Etc.

#### MongoDB sort()

In MongoDB, sorting is done by the sort() method. The sort() method consists of two basic building blocks. These building blocks are fields to be sorted and the sort order.

> The sorting order in MongoDB is defined by either a **one (1)** or a **minus (-1)**. Here

- the **positive one represents the ascending order**, while
- the **negative one represents the descending order**.

<br>

#### source: [MongoDB Sorting: sort() Method & Examples](https://www.bmc.com/blogs/mongodb-sorting/)

<br>
<br>

### So to see it in our app, I have the following 2 items but I will add a new one, I will name it 'cloud' just to see the behavior.

<br>

#### THE LIST

- cloud is the latest user

```javascript
[
  {
    _id: "6195976696da42f92065e7e7",
    username: "admin",
    email: "admin@gmail.com",
    password: "U2FsdGVkX19briYBcIhkrK0GkpMzYZTUwB4C0TGcd3Q=",
    isAdmin: true,
    createdAt: "2021-11-17T23:59:34.499Z",
    updatedAt: "2021-11-17T23:59:34.499Z",
    __v: 0,
  },
  {
    _id: "61959c3f76557e19b666b95a",
    username: "adminoo",
    email: "admino@gmail.com",
    password: "U2FsdGVkX1+IfsgQUkhmA4yhGhU1ymgegogQmX/4Gvs=",
    isAdmin: false,
    createdAt: "2021-11-18T00:20:15.921Z",
    updatedAt: "2021-11-18T00:20:15.921Z",
    __v: 0,
  },
  {
    _id: "6195b105f6fe5a41cdfd5654",
    username: "cloud",
    email: "cloud@gmail.com",
    password: "U2FsdGVkX18+8HirA2/hhTGjgQaMTX+HxF0X9QBApO4=",
    isAdmin: false,
    createdAt: "2021-11-18T01:48:53.242Z",
    updatedAt: "2021-11-18T01:48:53.242Z",
    __v: 0,
  },
];
```

<br>

#### Now let's understand this line, after what we just read here:

> The sorting order in MongoDB is defined by either a **one (1)** or a **minus (-1)**.

- the **positive one represents the ascending order**, while
- the **negative one represents the descending order**.

```javascript
.find().sort({ _id: -1 }).limit(1)
```

#### if we add the -1 it will.sort(and give is the descending order -1)

- which is:

```javascript
[
  {
    _id: "6195b105f6fe5a41cdfd5654",
    username: "cloud",
    email: "cloud@gmail.com",
    password: "U2FsdGVkX18+8HirA2/hhTGjgQaMTX+HxF0X9QBApO4=",
    isAdmin: false,
    createdAt: "2021-11-18T01:48:53.242Z",
    updatedAt: "2021-11-18T01:48:53.242Z",
    __v: 0,
  },
];
```

#### Now what happens if we remove the minus -1?

```javascript
.find().sort({ _id: 1 }).limit(1)
```

- It will give us this:

```javascript
// the first one
[
  {
    _id: "6195976696da42f92065e7e7",
    username: "admin",
    email: "admin@gmail.com",
    password: "U2FsdGVkX19briYBcIhkrK0GkpMzYZTUwB4C0TGcd3Q=",
    isAdmin: true,
    createdAt: "2021-11-17T23:59:34.499Z",
    updatedAt: "2021-11-17T23:59:34.499Z",
    __v: 0,
  },
];
```

### And what happens if we add the 1 and 5 limit?

- it will sort it alphabetically

```javascript
[
  {
    _id: "6195976696da42f92065e7e7",
    username: "admin",
    email: "admin@gmail.com",
    password: "U2FsdGVkX19briYBcIhkrK0GkpMzYZTUwB4C0TGcd3Q=",
    isAdmin: true,
    createdAt: "2021-11-17T23:59:34.499Z",
    updatedAt: "2021-11-17T23:59:34.499Z",
    __v: 0,
  },
  {
    _id: "61959c3f76557e19b666b95a",
    username: "adminoo",
    email: "admino@gmail.com",
    password: "U2FsdGVkX1+IfsgQUkhmA4yhGhU1ymgegogQmX/4Gvs=",
    isAdmin: false,
    createdAt: "2021-11-18T00:20:15.921Z",
    updatedAt: "2021-11-18T00:20:15.921Z",
    __v: 0,
  },
  {
    _id: "6195b105f6fe5a41cdfd5654",
    username: "cloud",
    email: "cloud@gmail.com",
    password: "U2FsdGVkX18+8HirA2/hhTGjgQaMTX+HxF0X9QBApO4=",
    isAdmin: false,
    createdAt: "2021-11-18T01:48:53.242Z",
    updatedAt: "2021-11-18T01:48:53.242Z",
    __v: 0,
  },
];
```

### And what happens if we add the -1 and 5 limit?

```javascript
[
  {
    _id: "6195b105f6fe5a41cdfd5654",
    username: "cloud",
    email: "cloud@gmail.com",
    password: "U2FsdGVkX18+8HirA2/hhTGjgQaMTX+HxF0X9QBApO4=",
    isAdmin: false,
    createdAt: "2021-11-18T01:48:53.242Z",
    updatedAt: "2021-11-18T01:48:53.242Z",
    __v: 0,
  },
  {
    _id: "61959c3f76557e19b666b95a",
    username: "adminoo",
    email: "admino@gmail.com",
    password: "U2FsdGVkX1+IfsgQUkhmA4yhGhU1ymgegogQmX/4Gvs=",
    isAdmin: false,
    createdAt: "2021-11-18T00:20:15.921Z",
    updatedAt: "2021-11-18T00:20:15.921Z",
    __v: 0,
  },
  {
    _id: "6195976696da42f92065e7e7",
    username: "admin",
    email: "admin@gmail.com",
    password: "U2FsdGVkX19briYBcIhkrK0GkpMzYZTUwB4C0TGcd3Q=",
    isAdmin: true,
    createdAt: "2021-11-17T23:59:34.499Z",
    updatedAt: "2021-11-17T23:59:34.499Z",
    __v: 0,
  },
];
```

<br>

### RECAPITULATING:

<br>

### Sorting in ascending order

In this example, I use the “make” text field to obtain the results in ascending order. The operator one ({“make”:1}) is used to indicate the ascending order, and MongoDB projection is used to filter out all the other fields except the “make” field.

```javascript
db.vehicleinformation.find({}, { make: 1, _id: 0 }).sort({ make: 1 });
```

[<img src="img/sort_mongo2_.png"/>]()

<br>

#### Sorting with the skip() method

> You can also use the skip() method with the sort() method. The skip() method allows the user to skip a specified number of documents from the resulting dataset.

In the following example, You can see the first four documents are being skipped while being sorted by the year in ascending order.

```javascript
db.vehicleinformation.find({}, { _id: 0 }).sort({ year: 1 }).skip(4).pretty();
```

<br>

#### source: [MongoDB Sorting: sort() Method & Examples](https://www.bmc.com/blogs/mongodb-sorting/)

<br>
<br>

[<img src="img/sort_mongo_skip.png"/>]()

<br>
<br>

#### Before continuing lets see what we have:

```javascript
//---------------------------------
//           GET all users
//---------------------------------
//
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;

  try {
    // Find all the user(no need of specific .findById() method)
    const users = query
      ? await User.find().sort({ _id: 1 }).limit(1)
      : await User.find();
    //
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});
//
//

module.exports = router;
```

<br>
<br>
<hr>
<br>
