-- Insert test data into the "users" table
INSERT INTO users (user_id, username, email, created_at) VALUES
                                                        (1, 'user1', 'user1@example.com', NOW()),
                                                        (2, 'user2', 'user2@example.com', NOW()),
                                                        (3, 'user3', 'user3@example.com', NOW());

-- Insert test data into the "products" table
INSERT INTO products (product_id, product_name) VALUES
                                            (1, 'ProductDTO A'),
                                            (2, 'ProductDTO B'),
                                            (3, 'ProductDTO C');

-- Insert test data into the "prices" table
INSERT INTO prices (price_id, product_id, price, created_at) VALUES
                                                           (1, 1, 19.99, NOW()),
                                                           (2, 2, 29.99, NOW()),
                                                           (3, 3, 39.99, NOW());
