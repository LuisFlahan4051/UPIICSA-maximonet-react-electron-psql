package database

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "luisflahan"
	password = "4051"
	dbname   = "maximonet_db"
)

func Connect() *sql.DB {
	stringConnection := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
	database, err := sql.Open("postgres", stringConnection)
	if err != nil {
		log.Fatal("Failed to open a DB connection: ", err)
	}

	return database
}

func TestConnection() {
	database := Connect()
	defer database.Close()

	err := database.Ping()
	if err != nil {
		panic(err)
	}

	fmt.Printf("\nSuccessfully connected to database!\n\n\n")
}
