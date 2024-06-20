# Todo API Documentation

## Introduction
This API allows users to manage their todos. The API provides endpoints for user registration, user login, and CRUD operations on todos. 

## Base URL
```
http://127.0.0.1:3000/

```

## Endpoints

### 1. Register User

**Endpoint:** `POST /auth/register`

**Description:** Register a new user.

**Request Body:**
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

**Responses:**
- **201 Created:** User registered successfully.
- **400 Bad Request:** Missing or invalid fields.
- **409 Conflict:** Username already exists.

**Handler:** `handleUserRegister.js`

### 2. Login User

**Endpoint:** `POST /auth/login`

**Description:** Log in an existing user.

**Request Body:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Responses:**
- **200 OK:** User logged in successfully.
- **400 Bad Request:** Missing or invalid fields.
- **401 Unauthorized:** Incorrect username or password.

**Handler:** `handleUserLogin.js`

### 3. Create Todo

**Endpoint:** `POST /todos`

**Description:** Create a new todo item.

**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```

**Request Body:**
```json
{
  "title": "string",
  "description": "string"
}
```

**Responses:**
- **201 Created:** Todo created successfully.
- **400 Bad Request:** Missing or invalid fields.
- **401 Unauthorized:** No token provided or invalid token.

**Handler:** `createTodo.js`

### 4. Get All Todos

**Endpoint:** `GET /todos`

**Description:** Get all todos for the logged-in user.

**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```

**Responses:**
- **200 OK:** Returns a list of todos.
- **401 Unauthorized:** No token provided or invalid token.

**Handler:** `getAllTodos.js`

### 5. Get Todo By Id

**Endpoint:** `GET /todos/:id`

**Description:** Get a specific todo item by its ID.

**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```

**Responses:**
- **200 OK:** Returns the todo item.
- **404 Not Found:** Todo item not found.
- **401 Unauthorized:** No token provided or invalid token.

**Handler:** `getTodoById.js`

### 6. Update Todo

**Endpoint:** `PATCH /todos/:id`

**Description:** Update a specific todo item by its ID.

**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```

**Request Body:**
```json
{
  "title": "string",
  "description": "string"
}
```

**Responses:**
- **200 OK:** Todo updated successfully.
- **404 Not Found:** Todo item not found.
- **400 Bad Request:** Missing or invalid fields.
- **401 Unauthorized:** No token provided or invalid token.

**Handler:** `updateTodo.js`

### 7. Delete Todo

**Endpoint:** `DELETE /todos/:id`

**Description:** Delete a specific todo item by its ID.

**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```

**Responses:**
- **200 OK:** Todo deleted successfully.
- **404 Not Found:** Todo item not found.
- **401 Unauthorized:** No token provided or invalid token.

**Handler:** `deleteTodo.js`

## Models

### User Model

**File:** `userModel.js`

**Fields:**
- `username`: String
- `email`: String
- `password`: String (hashed)

### Todo Model

**File:** `todoModel.js`

**Fields:**
- `title`: String
- `description`: String
- `completed`: Boolean
- `userId`: String (reference to the user)

## Middlewares

### JWT Token Middleware

**Files:**
- `verifyToken.js`: Middleware to verify the token in requests.

## Views

### Error Handling Pages

**Files:**
- `404.ejs`: Page for 404 errors.
- `home.ejs`: Home page.
- `login.ejs`: Login page.
- `register.ejs`: Registration page.

## Configuration

**Files:**
- `.env`: Environment variables for database connection and JWT secret.
- `db.js`: Database connection setup.
- `index.js`: Main entry point of the application.

## License

**File:** `LICENSE`

---
