-- Create the "users" table
CREATE TABLE users (
                       user_id bigint PRIMARY KEY,
                       username VARCHAR(50) NOT NULL,
                       email VARCHAR(100) NOT NULL,
                       created_at TIMESTAMP NOT NULL
);

-- Create the "prices" table
CREATE TABLE prices (
                        price_id bigint PRIMARY KEY,
                        product_id INT NOT NULL,
                        price DECIMAL(10, 2) NOT NULL,
                        created_at TIMESTAMP NOT NULL
);

-- Create the "products" table
CREATE TABLE products (
                          product_id bigint PRIMARY KEY,
                          product_name VARCHAR(100) NOT NULL
);
