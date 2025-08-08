/* VISTAS */
CREATE VIEW usersOfBranch AS SELECT 
name_branch, 
lastname_user, 
name_user, 
nickname_user, 
mail_user, 
phone_user 
FROM users INNER JOIN branches ON users.id_branch = branches.id_branch;

GRANT SELECT ON TABLE usersOfBranch TO simpleuser;
GRANT USAGE ON VIEW usersOfBranch TO simpleuser;

-- Checar el funcionamiento de esta vista con otros roles sin privilegios. Nota: los roles super usuario pueden utilizarlas. 
SELECT * FROM usersOfBranch;