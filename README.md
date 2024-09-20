# Simple Express API

## Setup Instructions

1. Clone the repository.
2. Run `npm ci` to install dependencies.
3. Create a `.env` file with your PostgreSQL configuration.
Example .env file:
```
DB_HOST=localhost
DB_USER=postgres
DB_PASS=password
DB_NAME=simeple-express-api-db
DB_PORT=5432
PORT=3000
```
4. Create the database and run migrations with `npx knex migrate:latest` and `npx knex seed:run`
5. Run the application with `node app.js`.
6. Use curl to call `/order` POST endpoint.
Body:
```
{
    "first_name": "Joe",
    "last_name": "shoes",
    "phone_number": 5823248295,
    "product_id": 3
}
```

### Time Taken
Took me about an hour to research/plan and set up the environment
Took me another hour to set up the database integration (I was having trouble setting up postgres locally)
Then finally the actual implementation took me another hour to do.