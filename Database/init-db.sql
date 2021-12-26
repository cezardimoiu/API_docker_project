CREATE TABLE IF NOT EXISTS medicine (
    id serial PRIMARY KEY,
    med_name varchar NOT NULL,
    quantity integer NOT NULL,
    med_description varchar
);