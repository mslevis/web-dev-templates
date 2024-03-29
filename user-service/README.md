## Setup User Service

To set up the same environment, you will require:

1. postgres
2. node.js
3. express (<npm i express pg> but I don't think this is required since I already committed them)
4. pgAdmin
5. dotenv
6. bcryptjs
7. Postman

To get started, open up command prompt/terminal and navigate to where the app.js is located.
Then, enter node app.js to start the server
You should see the following text: <App running on port 3000.>. If so, then everything is working as intended.

To test out the API calls, you can use postman to do so.

GET: /users | getUsers() | http://localhost:3000/users/
GET: /users/:id | getUserById() | http://localhost:3000/users/26
POST: /users | createUser() | http://localhost:3000/users/
PUT: /users/:id | updateUser() | http://localhost:3000/users/26
DELETE: /users/:id | deleteUser() | http://localhost:3000/users/26

You can use the following format to test out the POST request (Put request only requires username and email)
{
"username": "username",
"password" : "password123",
"email": "cs3219@gmail.com"
}

To set up the Postgres database, use the query tool function to execute the code

```
DROP TABLE IF EXISTS users;

CREATE TABLE users
(
	userId int primary key generated always as identity,
	username varchar(255),
	password varchar(255),
	email varchar(255),
	createdDateTime timestamp
)

INSERT INTO users (username, password, email, createdDateTime)
VALUES
 ('user1', 'password123', 'user1@example.com', NOW()),
  ('user2', 'pass456', 'user2@example.com', NOW()),
  ('user3', 'securePass', 'user3@example.com', NOW()),
  ('user4', '1234', 'user4@example.com', NOW()),
  ('user5', 'password987', 'user5@example.com', NOW()),
  ('user6', 'qwerty', 'user6@example.com', NOW()),
  ('user7', 'abc123', 'user7@example.com', NOW()),
  ('user8', 'letmein', 'user8@example.com', NOW()),
  ('user9', 'p@ssw0rd', 'user9@example.com', NOW()),
  ('user10', 'password567', 'user10@example.com', NOW());
```

## Set up guide

1. git clone the repo
2. install postgres if you dont have, you can use pgAdmin as a GUI to set up your database
3. run the provided sql script to create the table and insert some dummy data above
4. run `npm install` to install all the dependencies
5. create a .env file with the following variables, and fill in the values with how you set up your postgres database

```
DB_USER=
DB_HOST=
DB_DATABASE=
DB_PASSWORD=
DB_PORT=
```

6. To change the port the expressjs server is running on, edit `const port = 3001` in app.js
7. run `node app.js` to start the server
8. Use postman/thunder client to test the API calls
