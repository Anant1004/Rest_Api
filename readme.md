
```markdown
# User Management API Documentation

## Introduction
This API allows you to manage users in your application. You can perform CRUD operations (Create, Read, Update, Delete) on user data stored in a JSON file.

## Base URL
```
https://rest-api-ten-kappa.vercel.app/
```

## Endpoints

### Get All Users
```
GET /users
GET /api/users
```
Returns a list of all users.

#### Example Response
```json
[
    {
        "id": 1,
        "first_name": "John",
        "last_name": "Doe",
        "email": "john.doe@example.com"
    },
    {
        "id": 2,
        "first_name": "Jane",
        "last_name": "Smith",
        "email": "jane.smith@example.com"
    },
    ...
]
```

### Get User by ID
```
GET /api/users/:id
```
Returns the user with the specified ID.

#### Parameters
- `id`: The ID of the user to retrieve.

#### Example Response
```json
{
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com"
}
```

### Create a New User
```
POST /api/users
```
Creates a new user.

#### Request Body
```json
{
    "first_name": "Alice",
    "last_name": "Johnson",
    "email": "alice.johnson@example.com"
}
```

#### Example Response
```json
{
    "status": "success",
    "id": 101
}
```

### Update User by ID
```
PATCH /api/users/:id
```
Updates the user with the specified ID.

#### Parameters
- `id`: The ID of the user to update.

#### Request Body
```json
{
    "first_name": "Alice",
    "last_name": "Brown"
}
```

#### Example Response
```json
{
    "status": "success",
    "updatedUser": {
        "id": 101,
        "first_name": "Alice",
        "last_name": "Brown",
        "email": "alice.johnson@example.com"
    }
}
```

### Delete User by ID
```
DELETE /api/users/:id
```
Deletes the user with the specified ID.

#### Parameters
- `id`: The ID of the user to delete.

#### Example Response
```json
{
    "status": "success",
    "deletedUser": {
        "id": 101,
        "first_name": "Alice",
        "last_name": "Brown",
        "email": "alice.johnson@example.com"
    }
}
```

## Error Handling
- **404 Not Found**: If the requested resource is not found.
- **500 Internal Server Error**: If there's a server-side issue.

## Rate Limiting
There's currently no rate limiting implemented on this API.

## Authentication
This API does not require authentication for now.

## Contact
For any inquiries, please contact `your.email@example.com`.
```

Feel free to customize this documentation according to your specific requirements or add more details if needed.