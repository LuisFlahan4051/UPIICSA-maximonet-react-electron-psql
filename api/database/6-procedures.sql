/* PROCEDIMIENTOS ALMACENADOS PARA UTILIZAR CON CON DISPARADORES */
CREATE OR REPLACE FUNCTION addcontrol_user_trash() RETURNS TRIGGER AS $addtotrash$
DECLARE 

BEGIN
	INSERT INTO controls_users_trash VALUES (
		old.checkInDate_control_users,
		old.checkOutDate_control_users,
		old.checkInTime_control_users,
		old.checkOutTime_control_users,
		old.copiesBlackWhite_control_users,
		old.copiesColor_control_users,
		old.printsBlackWhite_control_users,
		old.printsColor_control_users,
		old.initialCash_control_users,
		old.pennies50_control_users,
		old.coins1_control_users,
		old.coins2_control_users,
		old.coins5_control_users,
		old.coins10_control_users,
		old.coins20_control_users,
		old.bills20_control_users,
		old.bills50_control_users,
		old.bills100_control_users,
		old.bills200_control_users,
		old.bills500_control_users,
		old.bills1000_control_users,
		old.id_responsibleUser_control_users,
		old.id_receiveUser_control_users
	);
	RETURN null;
END;
$addtotrash$ LANGUAGE plpgsql;

--------------------------------------------------------------------------
/* PROCEDIMIENTO ALMACENADOS PARA UTILIZAR CON CURSORES */
CREATE OR REPLACE FUNCTION clear_prices_branches(integer) RETURNS BOOLEAN AS $clearprices$
DECLARE 
	branch ALIAS FOR $1;
	registro RECORD;
	cursor_precios CURSOR FOR SELECT * FROM branch_products WHERE id_branch = branch;
BEGIN
	FOR registro IN cursor_precios LOOP
		--RAISE NOTICE 'Precio: %', registro.price_branch_product;
		UPDATE branch_products SET price_branch_product = NULL WHERE id_branch = registro.id_branch;
	END LOOP;
END;
RETURN true;
$clearprices$ LANGUAGE plpgsql;











/* TEST PROCEDURE USING CURSOR
Este procedimiento se ejecuta usando la clausula SELECT especificando 
el id de la sucursal que vamos a limpiar.
Para demostrar el funcionamiento se cambian algunos precios de la tabla,
luego se ejecuta el procedimiento y se verifica que se haya ejecutado exitosamente.

Otro ejemplo del cursos se puede ver en al archivo cursors.sql
*/

UPDATE branch_products SET price_branch_product = 20 WHERE id_branch = 1 AND id_product = 1;
UPDATE branch_products SET price_branch_product = 15 WHERE id_branch = 1 AND id_product = 3;
UPDATE branch_products SET price_branch_product = 18 WHERE id_branch = 1 AND id_product = 6;
UPDATE branch_products SET price_branch_product = 13 WHERE id_branch = 2 AND id_product = 1;
UPDATE branch_products SET price_branch_product = 16 WHERE id_branch = 2 AND id_product = 3;
UPDATE branch_products SET price_branch_product = 19 WHERE id_branch = 2 AND id_product = 6;

SELECT * FROM branch_products;

SELECT clear_prices_branches(1);

SELECT * FROM branch_products;