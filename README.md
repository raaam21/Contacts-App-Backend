# Contactify - Backend API

## Description
Contactify is a backend API for a contacts management application developed using Node.js and Express.js. This API provides endpoints for managing contacts, including functionalities like adding new contacts, updating existing ones, deleting contacts, and fetching contact details. Built with JavaScript, it leverages various libraries to enhance performance and functionality.

## Tech Stack
- **Node.js:** A JavaScript runtime environment used for building scalable network applications.
- **Express.js:** A minimalist web application framework for Node.js that simplifies the process of building APIs.
- **JavaScript:** The primary programming language used for server-side logic and API development.
- **Libraries:** Various libraries are utilized for enhanced functionality and performance, including but not limited to:
  - **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js, simplifying interactions with MongoDB databases.
  - **Body-parser:** Middleware for parsing incoming request bodies in a middleware before handlers.
  - **jsonwebtoken:** A library for generating JSON Web Tokens (JWT) to enable secure authentication and authorization.
  - **bcrypt:** A library for hashing passwords securely.

## Installation
1. Clone the repository from GitHub:
    ```
    git clone https://github.com/username/contactify-backend.git
    ```
2. Navigate to the project directory:
    ```
    cd contactify-backend
    ```
3. Install dependencies:
    ```
    npm install
    ```

## Usage
1. **Starting the Server:**
    ```
    npm start
    ```
2. **API Endpoints:**
    - **GET /contacts:** Retrieve all contacts.
    - **GET /contacts/:id:** Retrieve a specific contact by ID.
    - **POST /contacts:** Create a new contact.
    - **PUT /contacts/:id:** Update an existing contact.
    - **DELETE /contacts/:id:** Delete a contact by ID.


## Contact
For any inquiries or suggestions, please feel free to contact us at [bramharishi21@gmai.com](mailto:bramharishi21@gmai.com). We welcome your feedback!

## Acknowledgments
- We extend our gratitude to the open-source community for their invaluable contributions to the libraries and frameworks used in this project
