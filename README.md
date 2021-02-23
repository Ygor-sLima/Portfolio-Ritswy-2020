# Portfolio Ritswy 2020
A portfolio about my hobbies nowadays, actually doing it to compare in the future, since I want to build a portfolio per year for the next 4 years.

# Get started
- Install Node.js on your machine
- CD to **server** directory, and install dependencies with:

  > npm install

- Run the following command to create the database
  
  > npm run knex:migrate
  
- Type this to start the server:

  > npm run start
  
- Open another terminal
- CD to 'frontend' directory, and install dependencies with:

  > npm install
  
- Type this to start the frontend server:

  > npm start
  
- This should open the application, but if not go to http://localhost:3000

## Main server file
server.js

## Routing
All api requests go through http://localhost:3333/ since we are separating the server

All frontend requests go through http://localhost:3000/

And for 'dev' access, like adding a movie or whatever, go to http://localhost:3000/dev/

## Environment Variables
There is a .env.example file in the 'server' directory. This is a preview of what variables you should create to run the application.

By now there is just the "OMDBKey".

The steps are simple:

- Create a .env file inside the 'server' directory

- Copy all information inside .env.example

- Go to http://www.omdbapi.com/ (Consider becoming a Patreon) and get yourself a key.

- Put that key after the '='

- Your 'Movies' routes should work just fine.
