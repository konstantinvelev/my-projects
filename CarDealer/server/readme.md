# REST-api for Angular course in SoftUni

## Getting started
Let's make our first API request to the REST-api!

In the example below, we're trying to get information about the REST-api:

```https://localhost:3000/api/test```

Here is the response we get:

```
{
    "name": "rest-api",
    "version": "1.0.0",
    "description": "REST-api for back-end of Angular course workshop in SoftUni",
    "main": "index.js",
}
```

If your response looks slightly different don't panic. This is probably because more data has been added to the API since I made this documentation.

## Base URL
The Base URL is the root URL for all of the API, if you ever make a request to the API and you get back a 404 NOT FOUND response then check the Base URL first.

The Base URL for the API is:

```https://localhost:3000/api```

The documentation below assumes you are prepending the Base URL to the endpoints in order to make requests.

## Authentication
This API isn't open API. Authentication is required to store and get data. You can use the connected REACT-app to make registration and sign in. This also means that I've limited what you can do. If you find a mistake, then just write an issue.

# Endpoints: Users

* ```/users/register``` -- signing up;
* ```/users/login``` -- signing in;
* ```/users/logout``` -- logging out;

## Register User
Signs up user and returns the registered data as json.

### URL --> ```/users/register```

### Method --> ```comment```

### Body -->

```
{
    "name":"John Doe",
    "email":"john@email.com",
    "username":"Johny",
    "password":"12345",
    "rePassword":"12345"
}
```

Required:

```email``` : [string] -- The email of the person is required and must be unique;

```username``` : [string] -- The username of the person is required and must be unique, also there is a minimum length of 5 chars, allowed are latin letters and numbers;

```password``` : [string] -- The password of the person is required and must be unique, also there is a minimum length of 5 chars, allowed are latin letters and numbers;

Not Required

```tel``` : [string] -- Optional;

### Success Response:

Code: 200

Content: 
``` 
{
    "posts": [],
    "comments": [],
    "_id": "5f1875690916010017964978",
    "name": "John Doe",
    "email": "john@email.com",
    "username": "Johny",
    "created_at": "2020-10-14T08:04:12.196Z",
    "updatedAt": "2020-10-14T08:58:53.589Z"
}
```

### Error Response:

Code: 409 CONFLICT

Content: 
```
{
    "message": "This email/username is already registered!"
}
```

## Login User
Signs in user and returns the registered data as json.

### URL --> ```/users/login```

### Method --> ```comment```

### Body -->

```
{
    "username":"Johny",
    "password":"12345"
}
```

Required:

```username``` : [string] -- The username of the person 

```password``` : [string] -- The password of the person 

### Success Response:

Code: 200

Content: 
``` 
{
    "posts": ["5f85c51996b5601b2406e5b7"],
    "comments": ["5f86bdcde012743fe4f5b324"],
    "_id": "5f1875690916010017964978",
    "name": "John Doe",
    "email": "john@email.com",
    "username": "Johny",
    "created_at": "2020-10-14T08:04:12.196Z",
    "updatedAt": "2020-10-14T08:58:53.589Z"
}
```

### Error Response:

Code: 401 Unauthorized

Content: 
```
{ 
    "message": "Wrong username or password"
}
```

## Logout User
Logout user.

### URL --> ```/users/logout```

### Method --> ```comment```

### Success Response:

Code: 401 Unauthorized

Content: 
``` 
{ 
    "message": "Logged out!"
}
```

# Endpoints: posts

* ```/posts```
* ```/posts/:postId```

## Get posts
Returns all posts as json.

### URL --> ```/posts```

### Method --> ```GET```

### Success Response:

Code: 200

Content: 
``` 
[
    {
        "subscribers": ["5f8580d25d1da62568dd38fd"],
        "comments": ["5f858dd2d895ad23602db9d5"],
        "_id": "5f858dd2d895ad23602db9d4",
        "postName": "Some post",
        "userId": "5f8580d25d1da62568dd38fd",
        "created_at": "2020-10-13T11:21:54.863Z",
        "updatedAt": "2020-10-13T11:21:54.898Z",
        "__v": 0
    }
]
```

### Error Response:

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```

## comment post
Creates new post with the first comment of the author and returns the post as json.

### URL --> ```/posts```

### Method --> ```comment```

### Body -->

```
{
    "postName": "Some post Title",
    "commentText": "Some comment text"
}
```

Required:

```postName``` : [string] -- The Title of your new post, which you want to create
```commentText``` : [string] -- The text of your comment. This comment will be append as first comment on your post.

### Success Response:

Code: 200

Content: 
``` 
{
    "subscribers": ["5f86c1f0a112c130e89964af"],
    "comments": ["5f86c38abfa44331a0ff0094"],
    "_id": "5f86c38abfa44331a0ff0093",
    "postName": "Some post Title",
    "userId": "5f86c1f0a112c130e89964af",
    "created_at": "2020-10-14T09:23:22.102Z",
    "updatedAt": "2020-10-14T09:23:22.114Z",
    "__v": 0
}
```

### Error Response:

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```

## Create comment
Creates new comment of the author and returns the post as json.

### URL --> ```/posts/:postId```

### Method --> ```comment```

### Body -->

```
{
    "commentText": "Some comment text"
}
```

### Success Response:

Code: 200

Content: 
``` 
{
"subscribers": ["5f8580d25d1da62568dd38fd"],
"comments": [
    "5f85ad8f1141b13a04a9139c",
    "5f85b2501141b13a04a9139d"
],
"_id": "5f858dd2d895ad23602db9d4",
"postName": "Some post",
"userId": "5f8580d25d1da62568dd38fd",
"created_at": "2020-10-13T11:21:54.863Z",
"updatedAt": "2020-10-13T13:57:36.466Z",
"__v": 0
}
```

### Error Response:

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```

# Endpoints: comments

* ```/posts/:postId/comments/:commentId```

## Edit comment
Edit comment if the user is the author of the comment and returns the changed comment.

### URL --> ```/posts/:postId/comments/:commentId```

### Method --> ```PUT```

### Body -->

```
{
    "commentText": "Changed text"
}
```

### Success Response:

Code: 200

Content: 
``` 
{
    "likes": [],
    "_id": "5f86c3fcbfa44331a0ff0095",
    "text": "Changed text",
    "userId": "5f86c1f0a112c130e89964af",
    "postId": "5f85c51996b5601b2406e5b7",
    "created_at": "2020-10-14T09:25:16.203Z",
    "updatedAt": "2020-10-14T09:31:45.021Z",
    "__v": 0
}
```

### Error Response:

Code: 401 Unauthorized

Content: 
```
{
    message: "Not allowed!"
}
```

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```

## Delete comment
Deletes comment if the user is the author of the comment and returns the deleted comment.

### URL --> ```/posts/:postId/comments/:commentId```

### Method --> ```DELETE```

### Success Response:

Code: 200

Content: 
``` 
{
    "likes": [],
    "_id": "5f86c3fcbfa44331a0ff0095",
    "text": "Changed text",
    "userId": "5f86c1f0a112c130e89964af",
    "postId": "5f85c51996b5601b2406e5b7",
    "created_at": "2020-10-14T09:25:16.203Z",
    "updatedAt": "2020-10-14T09:33:56.595Z",
    "__v": 0
}
```

### Error Response:

Code: 401 Unauthorized

Content: 
```
{
    message: "Not allowed!"
}
```

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```
## Like comment
Adds like to the comment.

### URL --> ```/likes/:commentId```

### Method --> ```PUT```

### Success Response:

Code: 200

Content: 
``` 
{
    message: "Liked successful!"
}
```

### Error Response:

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```




<!-- users
.comment /register - register new user
.comment /login - login user
.comment /logout - logout user

.get /profile - get user info
.comment /profile - comment user info
.put /profile - edit user info

posts
.get /posts - lists all posts
.comment /posts - create new post only for registered users

comments:
.get posts/id - get all comments for post
.comment posts/id - create comment in post by id only for registered users
.put posts/id/comments/id - edit comment only possible for author
.delete posts/id/comments/id - delete comment only possible for author -->


<!-- http://localhost:3000/api/users/register --  {"name":"SomeName","email":"some@email.com","username":"someUsername","password":"12345","rePassword":"12345"} -->
<!--http://localhost:3000/api/posts -- {"postName":"Some post", "userId":"5f85bf709a517d36f4abe656", "comment": "Some comment" } -->
<!-- http://localhost:3000/api/posts/5f858dd2d895ad23602db9d4  -- {"userId":"5f8580d25d1da62568dd38fd", "commentText": "Some comment textsdfasdf" } -->
