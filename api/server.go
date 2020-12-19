package api

import (
	"log"
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/LuisFlahan4051/maximonet/api/graph"
	"github.com/LuisFlahan4051/maximonet/api/graph/generated"
)

func LoadGraphqlServer(port string, GraphHandle string) {
	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))

	http.Handle(GraphHandle, playground.Handler("GraphQL playground", GraphHandle+"/query"))
	http.Handle(GraphHandle+"/query", srv)

	log.Printf("connect to http://localhost:%s"+GraphHandle+" for GraphQL playground", port)
}

/*
const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
*/
