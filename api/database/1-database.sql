-- For drop tabase in windows using pgAdmin4
-- SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'maximonet_db';
-- DROP DATABASE maximonet_db;

DROP DATABASE IF EXISTS maximonet_db;

-- Create a new database called 'maximonet_db'
CREATE DATABASE maximonet_db;

/* NOTA: ORDEN DE EJECUCION.
1)  database.sql
2)  tables.sql
3)  data.sql
4)  roles.sql
5)  views.sql
6)  procedures.sql
7)  triggers.sql
8)  indexs.sql
9)  cursors.sql

*/