CREATE TABLE products
(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    description VARCHAR(80) NOT NULL,
    price INTEGER NOT NULL,
    image_url text NOT NULL
);