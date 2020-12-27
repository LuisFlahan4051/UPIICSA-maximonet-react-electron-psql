package api

//package main

import (
	"log"
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/handler/transport"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/LuisFlahan4051/maximonet/api/graph"
	"github.com/LuisFlahan4051/maximonet/api/graph/generated"
	"github.com/gorilla/mux"
	"github.com/gorilla/websocket"
	"github.com/rs/cors"
)

func main() {
	router := mux.NewRouter()
	// Add CORS middleware around every request
	// See https://github.com/rs/cors for full option listing
	router.Use(cors.AllowAll().Handler)

	/* router.Use(cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:8080"},
		AllowCredentials: true,
		Debug:            true,
	}).Handler) */

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))
	srv.AddTransport(&transport.Websocket{
		Upgrader: websocket.Upgrader{
			CheckOrigin: func(r *http.Request) bool {
				// Check against your desired domains here
				return r.Host == "http://localhost:3000"
			},
			ReadBufferSize:  1024,
			WriteBufferSize: 1024,
		},
	})

	router.Handle("/", playground.Handler("KrisstalNet", "/query"))
	router.Handle("/query", srv)

	log.Println("connect to http://localhost:8000/ for GraphQL playground")
	log.Fatal(http.ListenAndServe(":8000", router))
}
