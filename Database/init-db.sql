CREATE TABLE IF NOT EXISTS medicine (
    id serial PRIMARY KEY,
    med_name varchar2 NOT NULL,
    quantity number NOT NULL,
    med_description varchar2
);