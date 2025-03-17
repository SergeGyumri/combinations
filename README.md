# Installation & Setup

## 1. Clone the repository

```bash
    git clone https://github.com/SergeGyumri/combinations.git
```


## 2. Install Dependencies

To get started, you need to install all the necessary dependencies. Run the following command to install them:

```bash
    npm install
```

## 3. Set up the Database

Before you can run the application, you need to set up a MySQL database. Follow these steps to create the database:

### Create a MySQL Database

Open your terminal or MySQL client and execute the following commands to create a new database:

```bash
    mysql -u root -p
```

You will be prompted to enter your MySQL root password. After entering the password, run the following query to create
the combinations database:

```mysql
CREATE DATABASE combinations;
```

## 4. Configuration

In order to connect the application to your MySQL database, you need to adjust the configuration settings. Follow these
steps:

### Environment Variables

If you prefer not to hardcode sensitive information like the database password, you can use environment variables.
Create a `.env` file in the root directory of your project and add the following configuration:

```dotenv
DB_HOST=localhost
DB_NAME=combinations
DB_USER=root
DB_PASSWORD=root
```

## 5. **Database Migrations**

Once the database is created, you need to set up the required tables (`requests`, `items`, `combinations`, and
`responses`).

The migration will automatically run if the environment variable `MIGRATE` is set to `1`. To enable the migration,
follow these steps:

### Create the `.env` file

Ensure that you have a `.env` file in the root of your project. If you don't have one, create it. Add the following
line to enable migrations:

```bash
   MIGRATE=1
```

## 6. Run the Application

Once you have set up the database and configured the connection, you can run the application. Follow the steps below to
start the server:

### Start the Server

Run the following command to start the server:

```bash
    npm start
```
