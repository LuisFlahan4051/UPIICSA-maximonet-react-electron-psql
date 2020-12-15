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

func GetConnect() *sql.DB {
	stringConnection := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
	database, err := sql.Open("postgres", stringConnection)
	if err != nil {
		log.Fatal("Failed to open a DB connection: ", err)
	}

	return database
}

func TestConnection() {
	database := GetConnect()
	defer database.Close()

	err := database.Ping()
	if err != nil {
		panic(err)
	}

	fmt.Printf("\nSuccessfully connected to database!\n")
}

/* import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Database struct {
	Client *mongo.Client
}

func Connect() *Database {
	client, err := mongo.NewClient(options.Client().ApplyURI("mongodb://localhost:27017"))
	if err != nil {
		log.Println(err)
	}

	err = client.Connect(context.TODO())
	if err != nil {
		log.Println(err)
	}
	log.Println("Connect to MongoDB Succesfully!")

	return &Database{
		Client: client,
	}
} */
