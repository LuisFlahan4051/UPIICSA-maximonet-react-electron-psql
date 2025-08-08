INSERT INTO branches (name_branch, address_branch) VALUES 
('Santa Ana', 'Calle Antonio Díaz Varela 30-38, San Onofre, Centro, 90800 Chiautempan, Tlax.'),
('Tlaxcala', 'Tlaxcala de Xicohtencatl, Tlax. Centro, Escalinatas');

INSERT INTO users (name_user, lastName_user, nickname_user, mail_user, phone_user, password_user, root_user, admin_user, active_user, registrationDate, id_branch) VALUES
('Luis Fernando', 'Melendez Bustamante', 'luisflahan', 'luisflahan4051@gmail.com', '2461506175', '4051', 'TRUE', 'TRUE', 'TRUE', '17/11/2020', 1),
('user1', 'last name', 'user1', '', '', '123', 'FALSE', 'FALSE','TRUE', '17/11/2020', 1),
('', '', 'admin', '', '','123', 'FALSE', 'TRUE', 'TRUE', '17/11/2020', 2),
( 'Root name',
  'Root lastname',
  'root',
  'root@gmail.com',
  '246',
  '123',
  'TRUE',
  'TRUE',
  'TRUE',
  '17/11/2020',
  1
);

INSERT INTO products(code_product ,name_product, details_product, basePrice_product) VALUES 
('0X001','Coca Cola 600', 'Refresco de cola de 600ml', 18.5),
('0X002','Sabritas Adobadas', '', 20),
('0X003','Galletas Emperador', 'Chocolate, vainilla, etc.', 17),
('0X004','Chicle', '', 1),
('0X005','Mini Mamut', 'Galleta grande de chocolate', 17),
('0X006','Pulparindo', 'Dulce de tamarindo picoso', 3),
('0X007','Refresco Sabor', 'Jarritos u otras marcas', 15),
('0X008','Agua 600', 'Botella de agua purificada', 10),
('0X009','Folder Carta', 'Folder de tamaño carta de cualquier color', 4),
('0X010','Folder Oficio', 'Folder tamaño oficio de cualquier color', 5),
('0X011','Tamborin', 'Terron de dulce con chile', 1),
('0X012','Tutsi Pop', 'Paleta de cereza', 5),
('0X013','Palomitas extra', 'Palomitas de microondas extra mantequilla', 17),
('0X014','Galletas Principe', 'Galleta rellena', 17);

INSERT INTO articles(name_article, details_article, category_article) VALUES 
('Papel Carta', 'Papel bond de tamaño carta para impresora', 'Papel'),
('Papel Oficio', 'Papel bond de tamaño oficio para impresora', 'Papel'),
('Cenicero', 'Cenicero de vidrio o de porcelana', 'Gadget'),
('Escoba', 'Escoba para el aseo', 'Limpieza'),
('Audifono', 'Audifono marca logitech', 'Equipo'),
('Adaptador', 'Adaptador de memorias pequeñas a usb', 'Gadget'),
('Cables micro USB', 'De micro USB a USB', 'Gadget'),
('WebCam','Camara apara la computadora', 'Equipo'),
('Cloro', 'Artículo para el aseo', 'Limpieza'),
('Fabuloso', 'Artículo para el aseo', 'Limpieza');

INSERT INTO branch_products(id_branch, id_product, price_branch_product, stock_branch_product) VALUES 
(1, 1, 19, 30),
(1, 2, NULL, 20),
(1, 3, NULL, 30),
(1, 4, NULL, 30),
(1, 5, NULL, 30),
(1, 6, NULL, 30),
(1, 5, NULL, 30),
(1, 6, NULL, 30),
(1, 7, NULL, 30),
(1, 8, NULL, 30),
(1, 9, NULL, 30),
(1, 10, NULL, 30),
(1, 11, NULL, 30),
(1, 12, NULL, 30),
(1, 13, NULL, 30),
(1, 14, NULL, 30),

(2, 1, NULL, 35),
(2, 2, NULL, 20),
(2, 3, NULL, 20),
(2, 4, NULL, 20),
(2, 5, NULL, 20),
(2, 6, NULL, 20),
(2, 7, NULL, 20),
(2, 8, NULL, 20),
(2, 9, NULL, 20),
(2, 10, NULL, 20);

INSERT INTO branch_articles(id_branch, id_article, stock_branch_article, exists_branch_article, scarce_branch_article) VALUES 
(1, 1, 3000, 't', 'f'),
(1, 2, 3000, 't', 'f'),
(1, 3, 6, 't', 'f'),
(1, 4, 1, 't', 'f'),
(1, 5, 15, 't', 'f'),
(1, 6, 5, 't', 'f'),
(1, 7, 5, 't', 'f'),
(1, 8, 3, 't', 'f'),
(1, 9, 1, 't', 't'),
(1, 10, 2, 't', 'f'),

(2, 1, 3000, 't', 'f'),
(2, 2, 3000, 't', 'f'),
(2, 3, 6, 't', 'f'),
(2, 4, 1, 't', 'f'),
(2, 5, 15, 't', 'f'),
(2, 6, 5, 't', 'f'),
(2, 7, 5, 't', 'f'),
(2, 8, 3, 't', 'f'),
(2, 9, 1, 't', 't'),
(2, 10, 2, 't', 'f');

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
),
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

2,
NULL
);

INSERT INTO products_controls_users (id_control_users, id_product, stock_product_control_users, sale_product_control_users) VALUES 
(1, 1, 30, 4),
(1, 2, 40, 5);

INSERT INTO articles_controls_users (id_control_users, id_article, stock_article_control_users, exists_article_control_users, scarce_article_control_users) VALUES 
(1 , 1, 2980, 't', 'f');

INSERT INTO observations (id_control_users, details_observation, income_observation, expenses_observation) VALUES
(1, 'Impresión de responsiva', 0, 1),
(1, 'Impresión de responsiva', 0, 1);
