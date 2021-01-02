package api

//package main
import (
	"fmt"
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/handler/transport"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/LuisFlahan4051/maximonet/api/graph"
	"github.com/LuisFlahan4051/maximonet/api/graph/generated"
	"github.com/gorilla/mux"
	"github.com/gorilla/websocket"
)

func AddGraphqlServer(port string, graphDoor string, mux *mux.Router) *mux.Router {

	graph := generated.NewExecutableSchema(generated.Config{
		Resolvers: &graph.Resolver{},
	})

	graphServer := handler.NewDefaultServer(graph)
	graphServer.AddTransport(&transport.Websocket{
		Upgrader: websocket.Upgrader{
			CheckOrigin: func(r *http.Request) bool {
				switch r.Host {
				case "http://localhost:3000": // ReactJS Development Server
					break
				case "http://localhost:" + port:
					break
				default:
					return false
				}
				return true
			},
			ReadBufferSize:  1024,
			WriteBufferSize: 1024,
		},
	})

	mux.Handle(graphDoor, playground.Handler("GraphQL playground", graphDoor+"/query"))
	mux.Handle(graphDoor+"/query", graphServer)

	fmt.Printf("Server for Graph added, connect to  http://localhost:%s"+graphDoor+" for GraphQL playground\n", port)
	return mux
}
