Author: Malik A. Hussain

SBA-319-MongoDB-App
This is a back-end MongoDB-based application built using Node.js, Express.js, and Mongoose.
The application is designed to manage a collection of cars, allowing users to create, read, update, and delete (CRUD) car records, as well as reviews for the car dealership.

Getting Started
To get started with the application, follow these steps:

Clone the repository: git clone https://github.com/malikhussain26/SBA-MongoDB-Database-Application.git
Install dependencies: npm install
Start the application: node index.js
Project Structure
The project is organized into the following folders:

collections: contains Mongoose models for the car collection
models: contains Mongoose models for the car collection ( deprecated )
node_modules: contains dependencies installed by npm
package.json: contains project metadata and dependencies
Dependencies
The application depends on the following packages:

express: a popular Node.js web framework
mongoose: a MongoDB ORM for Node.js
dotenv: a package for loading environment variables from a .env file
Database Configuration
The application uses a MongoDB database, which is configured in the index.js file. The database connection is established using the mongoose.connect() method.

Models/collections
The application defines a single Mongoose model, Car, which represents a car record in the database. The model is defined in the car.collection.js file.

API Endpoints
The application exposes the following API endpoints for ( /cars ) ( /reviews) and ( /users ):

GET /cars: retrieves a list of all car records
GET /cars/:id: retrieves a single car record by ID
POST /cars: creates a new car record
PUT /cars/:id: updates a single car record
DELETE /cars/:id: deletes a single car record

Error Handling
The application uses a try-catch block to catch and handle errors that occur during database operations. Error messages are logged to the console using the console.error() method.

Testing
Postman was used for API endpoint testing.

