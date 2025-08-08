/* CURSORES */
DO 
$$
    DECLARE registro RECORD;
    cursor_precios CURSOR FOR SELECT * FROM branch_products;

    BEGIN
        OPEN cursor_precios;

        FOR registro IN cursor_precios LOOP
            RAISE NOTICE 'Precio: %', registro.price_branch_product;
            --UPDATE branch_products SET price_branch_product = NULL WHERE id_branch = registro.id_branch;
        END LOOP;
    END 
$$
LANGUAGE plpgsql;