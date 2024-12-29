# book-record-management

This is a book record management API backend for the mnagement of recrods and books

# routes and Endpoints

## /users
POST:Create a new user
GET:Get all list of users


## /users/{id}
GET:get a user by id
PUT:Update a user by id
DELETE:Delete a user by id(check by id if he/she still has an issued book )(is there any fine to be paid)

## /users/subscription-details/{id}

GET: Get user subscription details
    1.date of subscription 
    2.valid till
    3.fine


## /books
GET: get all books
POST: Create a new book


## /books/{id}
GET:get a book by id
PUT: update a book by id

## /books/issued
GET: get all issued books 

## /books/issued/withFine
GET :get all issued books with fine

## subcriptions types
Basic(3m)
Standard(6m)
premium(12m)

If subscription date is 01/12/2024
and subscription type is standard the valid date wil be 01/02/2025
if he has an issued book and issued book is to be returned at 1/02/2025
if he missed the date of return ,and his subscription also expires ,then he will get a fine of Rs 200./