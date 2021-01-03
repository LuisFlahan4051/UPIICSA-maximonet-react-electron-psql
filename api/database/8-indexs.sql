/* INDEXACION */
SELECT * FROM products;

CREATE INDEX code ON products(code_product);

SELECT * FROM products;