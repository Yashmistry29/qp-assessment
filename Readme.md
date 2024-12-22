# About This Project

This project is a simple example of how a grocery-booking-API can be implemented using MongoDB, Express, Node.js, and JavaScript. The project is a simple API that allows users to book groceries from a store. The API allows users to create, read, update, and delete grocery bookings. The API also allows users to view all grocery bookings and view a single grocery booking by ID.\

# How to Run the Project

1. Firstly clone this repository from github

```sh
git clone https://github.com/Yashmistry29/qp-assessment.git
```

2. Then move to the project directory
3. Install the node module using below command.

```sh
npm install or npm i
```

4. Afer installing module run the test command to start the project in Development mode on localhost with port 4000.

```sh
npm run test or npm test
```

5. To run the project in production mode use below command.

```sh 
npm run start or npm start
```

# Example of API Endpoints

I have created API.rest file in the root directory of the project. You can use this file to test the API endpoints using the REST Client extension in Visual Studio Code. The API.rest file contains examples of how to use the API endpoints to create, read, update, and delete grocery bookings. You can use the API.rest file to test the API endpoints and see how the API works.

# API Endpoints

The API has the following endpoints:

Once the app is running, you can access the /admin routes:

- POST /admin/groceries: Add a grocery.
- GET /admin/groceries: Get all groceries.
- PUT /admin/groceries/:id: Update a grocery by ID.
- DELETE /admin/groceries/:id: Delete a grocery by ID.
- PATCH /admin/groceries/:id/inventory: Update inventory for a grocery by ID.

user routes:
- GET /user/groceries: Fetch available groceries.
- POST /user/placeOrder: Place a grocery order.