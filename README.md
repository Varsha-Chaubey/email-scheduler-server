# Email Scheduler API Documentation

This document provides details on how to interact with the Email Scheduler API, which allows users to manage schedules for sending emails.

Demo Frontend URL: https://email-schedule-app.vercel.app/

## Get All Schedules

### Endpoint

GET ${SERVER_URL}/schedules

### Response

json
[
  {
    "_id": "65a0b5ea3f51f81af7345373",
    "title": "Sample title",
    "description": "sample desc",
    "subject": "sample subject",
    "frequency": "daily",
    "repeat": "some value",
    "time": "10:00 AM",
    "createdAt": "2024-01-12T03:45:46.609Z",
    "updatedAt": "2024-01-12T03:45:46.609Z",
    "__v": 0
  },
  // Additional schedule objects...
]


## Create Schedule

### Endpoint

POST ${SERVER_URL}/schedules/create

### Request Body

json
{
  "title": "Sample title",
  "description": "sample desc",
  "subject": "sample subject",
  "frequency": "daily",
  "repeat": "some value",
  "time": "10:00 AM"
}


### Response

json
{
  "title": "Sample title",
  "description": "sample desc",
  "subject": "sample subject",
  "frequency": "daily",
  "repeat": "some value",
  "time": "10:00 AM",
  "_id": "65a0cc9c0eaf0ea08c307078",
  "createdAt": "2024-01-12T05:22:36.273Z",
  "updatedAt": "2024-01-12T05:22:36.273Z",
  "__v": 0
}


## Update Schedule

### Endpoint

PUT ${SERVER_URL}/schedules/update/${_id}

### Request Body

json
{
  "description": "Lorem"
}


### Response

json
{
  "_id": "65a0cc9c0eaf0ea08c307078",
  "title": "Sample title",
  "description": "Lorem",
  "subject": "sample subject",
  "frequency": "daily",
  "repeat": "some value",
  "time": "10:00 AM",
  "createdAt": "2024-01-12T05:22:36.273Z",
  "updatedAt": "2024-01-12T05:23:56.456Z",
  "__v": 0
}


## Delete Schedule

### Endpoint

DELETE ${SERVER_URL}/schedules/delete/${_id}

### Response

json
{
  "msg": "Schedule deleted successfully"
}


## Search Schedule by Title

### Endpoint

GET ${SERVER_URL}/schedules/search?title={title}

### Response

json
[
  {
    "_id": "65a0b5ea3f51f81af7345373",
    "title": "Sample title",
    "description": "sample desc",
    "subject": "sample subject",
    "frequency": "daily",
    "repeat": "some value",
    "time": "10:00 AM",
    "createdAt": "2024-01-12T03:45:46.609Z",
    "updatedAt": "2024-01-12T03:45:46.609Z",
    "__v": 0
  },
  // Additional schedule objects matching the search criteria...
]
