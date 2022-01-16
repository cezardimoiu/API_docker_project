CREATE TABLE IF NOT EXISTS books (
    id serial PRIMARY KEY,
    name varchar,
    author varchar,
    description varchar,
    price varchar,
    inserted_at timestamp
);