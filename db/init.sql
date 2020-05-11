CREATE TABLE customers (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(30),
    hashed_password TEXT,
    address address_id,
    employer VARCHAR(30)
);


-- One to many relationship
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(user_id),
    total INT
);


-- Many to many relationship
CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    price INT
);
CREATE TABLE cart (
    cart_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(user_id),
    item_id INT REFERENCES items(item_id),
);

-- Join statement
SELECT * FROM cart
JOIN customers ON customers.user_id = cart.user_id
JOIN items ON items.item_id = cart.item_id
WHERE customers.user_id = $1;

-- Sub-Query 
SELECT * FROM customers
WHERE customer_id IN (SELECT customer_id FROM orders WHERE total > 100);