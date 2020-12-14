package database

import "fmt"

func Connect() {
	fmt.Println("Hello World!")
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
