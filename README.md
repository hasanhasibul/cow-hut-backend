# Digital Cow Hut Backend Assignment

# Deployed on Render

# Live API [link](https://classroom.github.com/a/le5T8iGk)

[link](https://classroom.github.com/a/le5T8iGk)

### Create a new User

Route: /api/v1/auth/signup (POST)

Request body:

```json
{
 "password":"abrakadabra",
 "role": "buyer",
  "name": {
    "firstName": "Kopa",
     "lastName": "Samsu"
  },
 "phoneNumber":"01711111111",
 "address": "Chattogram",
 "budget":30000  // money to buy the cow
 "income":0 // By Default 0
}
```

Response: The newly created user object.

Response Sample Pattern:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Users created successfully",
  "data": {}
}
```

### Get All Users

Route: /api/v1/users (GET)

Request body:

Response: The user's array of objects.

Response Sample Pattern:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Users retrieved successfully",
  "data": [{}, {}]
}
```

### Get a Single User

Route: /api/v1/users/:id (GET)

Request Param: :id

Response: The specified user object.

Response Sample Pattern:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "User retrieved successfully",
  "data": {}
}
```

### Update a Single User

Route: /api/v1/users/:id (PATCH)

Request Param: :id

Response: The updated user object.

Response Sample Pattern:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "User updated successfully",
  "data": {}
}
```

### Delete a User

Route: /api/v1/users/:id ( DELETE)

Request Param: :id

Response: The deleted user object.

Response Sample Pattern:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Uers deleted successfully",
  "data": {}
}
```

## Implement Create, Read, Update, and Delete Operations for COW listings.

### Create a New Cow

Route: /api/v1/cows (POST)

Request body:

```json
{
  "name": "Bella",
  "age": 4,
  "price": 5000,
  "location": "Dhaka",
  "breed": "Brahman",
  "weight": 400,
  "label": "for sale",
  "category": "Beef",
  "seller": "609c17fc1281bb001f523456"
}
```

Response: The newly created cow object.

Response Sample Pattern:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Cow created successfully",
  "data": {}
}
```

### Get All Cows

Route: /api/v1/cows (GET)

Request body:

Response: The cows array of objects.

Response Sample Pattern:

```json
  {
      "success": true,
      "statusCode":200,
      "message": "Cows retrieved successfully",
      "meta": {
        "page": 3,
        "limit": 10,
        "count":1050
        }
      "data": [{},{}] ,
  }
```

### Retrieve paginated and filtered cow listings: ( You do not need to implement pagination as we implemented, you can do as you want )

Route: /api/v1/cows?

Query parameters: (Case Insensitive)

- page: The page number for pagination (e.g., ?page=1).
- limit: The number of cow listings per page (e.g., ?limit=10).
- sortBy: The field to sort the cow listings (e.g., ?sortBy=price).
- sortOrder : The order of sorting, either 'asc' or 'desc' (e.g., ?sortOrder=asc).
- minPrice: The minimum price for filtering (e.g., ?minPrice=1000).
- maxPrice: The maximum price for filtering (e.g., ?maxPrice=5000).
- location: The location for filtering (e.g., ?location=chattogram).
- searchTerm: The search query string for searching cows (e.g., ?query=Dhaka). (Search Fields should be location, breed, and category)

Response: An array of cow listing objects that match the provided filters, limited to the specified page and limit.

Response Sample Pattern:

```json
  {
      "success": true,
      "statusCode":200,
      "message": "Cows retrieved successfully",
      "meta": {
        "page": 3,
        "limit": 10,
        }
      "data": [{},{}],
  }
```

### Get a Single Cow

Route: /api/v1/cows/:id (GET)

Request Param: :id

Response: The specified cow object.

Response Sample Pattern:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Cow retrieved successfully",
  "data": {}
}
```

### Update a Single Cow

Route: /api/v1/cows/:id (PATCH)

Request Param: :id

Response: The updated cow object.

Response Sample Pattern:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Cow updated successfully",
  "data": {}
}
```

### Delete a Cow

Route: /api/v1/cows/:id ( DELETE)

Request Param: :id

Response: The deleted cow object

Response Sample Pattern:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Cow deleted successfully",
  "data": {}
}
```

#3 Bonus Part : ( 10 Marks )

### Implement Create, Read Operations for Order History Listings.

Route: /api/v1/orders (POST)

Request body:

```json
{
  "cow": "ObjectId(“6473c6a50c56d0d40b9bb6a3)", // cow reference _id
  "buyer": "ObjectId(“6473c6a50c56d0d40b9bb6a3)" // user reference  _id
}
```

Response: The newly created order object.

Implement a transactional operation for buying a cow. When a user requests to buy a cow, simulate a `transaction` process without involving an actual payment gateway. Upon successful transaction simulation, update the cow's status as sold, transfer money from buyer to seller account, and provide appropriate response messages.

Steps:

- The user initiates a purchase order using the "api/v1/orders" POST API.
- Check that the user has enough money in their account to buy the cow.
- If the user needs more money, show them an error message.
- If the user has enough money, begin the buying process (start a transaction). This involves a few steps:
- Change the cow's label from 'for sale' to 'sold out'.
- Deduct the cost of the cow from the buyer's budget
- Put the same amount of cost into the seller's income
- Make an entry in the orders collection
- Commit transaction
- End transaction session
- If any error happens abort the transaction

Route: /api/v1/orders (GET)

Request body:

Response: The ordered array of objects.

Response Sample Pattern:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Orders retrieved successfully",
  "data": {}
}
```

### Deadline:

- 60 Marks 3 Days (Till Sunday 11.59 AM)
- 50 Marks 1 Day (Till Monday 11.59 AM)

`** In order for your assignment to be evaluated, it is essential to have a minimum of 20 meaningful commits. Please note that unnecessary commits will not be considered as part of the evaluation process.**`

### What to submit

1. Your Github Private Repository Link
2. Deployed Live Link (Vercel / Railway / Heroku or any other platform)
   - `** Do not use a logger. It will not work on the free hosting platforms **`
3. Must include all the routes into Readme.md file.
   - `** You must follow provided API Endpoints  for creating routes. Otherwise, you will lose your marks **`
     You can follow the pattern given below to enlist your application routes in the readme.md file:

### Live Link: https://example.com

### Application Routes:

#### User

- api/v1/auth/signup (POST)
- api/v1/users (GET)
- api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH)
- api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

#### Cows

- api/v1/cows (POST)
- api/v1/cows (GET)
- api/v1/cows/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- api/v1/cows/6177a5b87d32123f08d2f5d4 (PATCH)
- api/v1/cows/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

### Pagination and Filtering routes of Cows

- api/v1/cows?pag=1&limit=10
- api/v1/cows?sortBy=price&sortOrder=asc
- api/v1/cows?minPrice=20000&maxPrice=70000
- api/v1/cows?location=Chattogram
- api/v1/cows?searchTerm=Cha

#### Orders

- api/v1/orders (POST)
- api/v1/orders (GET)
