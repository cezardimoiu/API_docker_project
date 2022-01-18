CREATE TABLE IF NOT EXISTS medicine (
    id serial PRIMARY KEY,
    name varchar,
    producer varchar,
    description varchar,
    price varchar,
    inserted_at timestamp
);