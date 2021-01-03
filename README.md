# KRISSTALNET

Punto de ventas para la sucursal KrisstalNet.

## Enfoque

Brindar una facilidad de uso multiplataforma mediante un diseño moderno inspirado en el diseño Material con React y Electron.

## Capturas
![alt text](prototype/FramelessV2.png)
![alt text](prototype/FramelessV2Dark.png)
![alt text](prototype/Login.png)
![alt text](prototype/Responsiva.png)

## Tecnologías usadas 🛠️

Lenguaje de programación **JavaScript y Go**

Interfaz GUI **HTML/CSS ReactJS**

Base de Datos **MongoDB**

API **Go GraphQL**

Otros **Redux**

### Pre-requisitos de compilación 📋

Git
NodeJS
Go
PostgreSQL

### Instalación 🔧

Primero se debe clonar este repositorio, se puede descargar desde el portal de github o utilizando la git bash:
```
> git clone https://github.com/LuisFlahan4051/maximonet
> cd maximonet
```
Luego tenemos que instalar las dependecias necesarias de NodeJS para construir la UI en ReactJS, se puede hacer con las siguientes líneas en la misma bash o termianl:
```
> cd ui
> npm install
```
Una vez instaladas las dependencias, podemos compilar el proyecto de ReactJS utilizando el siguiente código desde la misma terminal:
```
> npm run build
```
Esto nos creará una carpeta dentro de maximonet/ui llamada build. Es donde se encuentra el proyecto compilado, optimizado y minificado listo para servir con cualquier servidor.
Para servir la página y sus contenidos estáticos pudes utilizar la opción que te brinda NodeJS para crear un servidor en el momento que compilas el proyecto de react. 
Otra opción es metiendo la carpeta dentro del servidor Apache XAMPP en /httpdocs.
Lo que hicimos en este proyecto para poder desplegar la UI cada que se necesite fue crear un servidor mediante las librerías http del lenguaje de Golang. Este maravilloso lenguaje que incorpora ejecución concurrente mediante GoRutines permite crear más de un solo servidor y ejecutar la aplicación ElectronJS-Go al mismo tiempo y en un solo ejecutable compilado.
Por lo tanto, cada que ejecutamos la aplicación se ejecuta el entorno de Electron, se alza un servidor estático para la UI y un servidor para la API de comunicación con la base de datos PostgreSQL. Esta API funciona bajo la estructura de GraphQL.

Entonces, para compilar la aplicacion finalmente ingresamos las siguientes líneas a la terminal:
Estabamos situados en la carpeta /maximonet/ui, tendremos que dirigirnos un directorio antes.
```
> cd ..
```
Luego ejecutar el compilador nativo de Golang:
#### Linux:
```
> go build main.go
```
#### Windows:
```
> go build -ldflags "-H windowsgui" -o main.exe
```
Nota: talvez se tenga que cambiar dentro de main.go el puerto de desarrollo 3000 por el puerto de ejecución 4051

Para finalizar se tiene que crear la base de datos maximonet_db junto con el usuario luisflahan. Los scripts para esto se sitúan en la carpeta /maximonet/api/database.
Para crear la base de datos y el usuario en windows se tiene que hacer mediante el administrador gráfico pgAdmin que se instala por defecto al instalar PostgreSQL:
--
--
Para crear el usuario y la base de datos en linux es más sencillo ya que contamos con la herramienta psql para ejecutar scripts desde el terminal. 
Se pueden seguir las siguientes líneas:
Instalación de PostgreSQL en fedora 33:
```
> sudo dnf install -y https://download.postgresql.org/pub/repos/yum/reporpms/F-33-x86_64/pgdg-fedora-repo-latest.noarch.rpm
> sudo dnf update -y
> sudo dnf install -y postgresql13-server
> sudo /usr/pgsql-12/bin/postgresql-13-setup initdb
> sudo systemctl start postgresql-13
> sudo sudo systemctl enable postgresql-13
```
Instalación de PostgreSQL en Ubuntu:
```
> sudo apt update
> sudo apt install postgresql postgresql-contrib
```

Para crear el usuario:
Nota: Meter la contraseña "4051" porque el archivo de conexión está escrito con la misma.
```
> sudo -iu postgres createuser --interactive -P luisflahan
Ingrese la contraseña para el nuevo rol:
Ingrésela nuevamente:
¿Será el nuevo rol un superusuario? (s/n) s

> createdb luisflahan -O luisflahan
```
¡Listo! Ahora, para ejecutar los scripts ingresamos lo siguiente:
Nota: Seguimos situados con la terminal en /maximonet
```
> sudo -iu postgres psql
psql (13)
Digite «help» para obtener ayuda.

postgres=# 
```
Nos abrirá una la aplicación psql en el usuario postgres. Para ingresar las líneas van directamente en postgres=# <Aquí>.
Ejecutamos lo siguiente:
```
\i api/database/1-database.sql
\c maximonet_db
\i api/database/2-tables.sql
\i api/database/3-data.sql
\q

> exit
```
¡Listo! Una vez finalizado ya podremos ejecutar la aplicación con un simple doble click.

Notas:
El servidor de PostgreSQL se instala automaticamente en el puerto 5432.
El hostname: localhost
El usuario: luisflahan
La contraseña: 4051
BD: maximonet_db
En caso de cambiar las especificaciones, se tiene que cambiar dentro del archivo /maximonet/api/database/database.go

Para probar el funcionamiento de la API que se emplea, se tiene que dejar ejecutando la aplicacion y luego entrar al navegador con la dirección localhost:4051/graph .
En esa aplicación de desarrollo puedes meter el código de consulta:
```
query datos_usuarios{
  users{
    id
    name
    nickname
    mail
    phone
  }
}
```
La intgración de la base de datos con la api está en /maximonet/api/graph/schema.resolvers.go
--
--

## Autor ✒️
**LuisFlahan4051**
https://github.com/luisflahan4051


## Licencia 📄

GNU GPL.
