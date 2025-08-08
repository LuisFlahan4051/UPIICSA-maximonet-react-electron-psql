/* DISPARADORES EMPLEANDO PROCEDIMIENTOS ALMACENADOS  */
CREATE TRIGGER addcontroltotrash AFTER DELETE 
ON controls_users FOR EACH ROW
EXECUTE PROCEDURE addcontrol_user_trash();








/* TEST PROCEDURE AND TRIGER 
1) Se ingresa una responsiva a la tabla de responsivas para hacer la prueba.
2) Se elimina la responsiva que creamos, esta tiene id = 3.
3) Consultamos la tabla de responsivas para ver que se haya eliminado.
4) Consultamos la tabla de papelera de responsiva para ver que se haya ingresado 
correctamente el registro eliminado anteriormente.
*/
INSERT INTO controls_users 
(
checkInDate_control_users,
checkOutDate_control_users,
checkInTime_control_users,
checkOutTime_control_users,

copiesBlackWhite_control_users,
copiesColor_control_users,
printsBlackWhite_control_users,
printsColor_control_users,

initialCash_control_users,

pennies50_control_users,
coins1_control_users,
coins2_control_users,
coins5_control_users,
coins10_control_users,
coins20_control_users,

bills20_control_users,
bills50_control_users,
bills100_control_users,
bills200_control_users,
bills500_control_users,
bills1000_control_users,

id_responsibleUser_control_users,
id_receiveUser_control_users
)
VALUES 
(
'13/12/2020',
'13/12/2020',
'7:00',
'19:00',

10,
15,
30,
15,

0,

4,
3,
8,
6,
10,
0,

3,
2,
1,
2,
0,
0,

1,
2
);

INSERT INTO products_controls_users (id_control_users, id_product, stock_product_control_users, sale_product_control_users) VALUES 
(3, 1, 30, 4),
(3, 2, 40, 5);

INSERT INTO articles_controls_users (id_control_users, id_article, stock_article_control_users, exists_article_control_users, scarce_article_control_users) VALUES 
(3 , 1, 2980, 't', 'f');

INSERT INTO observations (id_control_users, details_observation, income_observation, expenses_observation) VALUES
(3, 'Impresión de responsiva', 0, 1),
(3, 'Impresión de responsiva', 0, 1);

SELECT * FROM controls_users;
SELECT * FROM controls_users_trash;

DELETE FROM controls_users WHERE id_control_users = 3;

SELECT * FROM controls_users;
SELECT * FROM controls_users_trash;
