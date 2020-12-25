SELECT * FROM products;
SELECT * FROM articles;

SELECT * FROM users;

INSERT INTO users (name_user, lastName_user, nickname_user, mail_user, phone_user, password_user, root_user, admin_user, registrationDate, id_branch)
VALUES (
    'Root name',
    'Root lastname',
    'root',
    'root@gmail.com',
    '246000000',
    '123',
    'TRUE',
    'TRUE',
    '17/11/2020',
    1
);
