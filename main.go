package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"time"

	"github.com/LuisFlahan4051/maximonet/api"
	"github.com/LuisFlahan4051/maximonet/api/database"
	"github.com/asticode/go-astikit"
	"github.com/asticode/go-astilectron"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

var (
	port = "4051"
	urlGui = "http://localhost:" + port + "/"
	//urlGui    = "http://localhost:3000/" // React Server.
	graphDoor = "/graph"
)

func index(writer http.ResponseWriter, request *http.Request) {
	indexTemplate := template.Must(template.ParseFiles("ui/build/index.html"))
	indexTemplate.Execute(writer, nil)
}

func addUIHandler(mux *mux.Router) *mux.Router {
	staticFiles := http.FileServer(http.Dir("ui/build/static/"))

	mux.PathPrefix("/static/").Handler(http.StripPrefix("/static/", staticFiles))
	mux.HandleFunc("/", index)

	fmt.Println("Puerto " + port + ". Añadido correctamente!")
	fmt.Println("Ya puede abrir la dirección " + urlGui + " en su navegador.\n")
	return mux
}

func newMux() *mux.Router {
	mux := mux.NewRouter()

	//Use this for enable all origins of requests
	mux.Use(cors.AllowAll().Handler)

	//Use this for enable specific origins
	/* mux.Use(cors.New(cors.Options{
		AllowedOrigins:   []string{
			"http://localhost:8080",
			"http://localhost:"+port,
		},
		AllowCredentials: true,
		Debug:            true,
	}).Handler) */
	mux = addUIHandler(mux)
	mux = api.AddGraphqlServer(port, graphDoor, mux)
	return mux
}

func runServer(mux *mux.Router) {
	fmt.Println("Server working fine!")
	log.Fatal(http.ListenAndServe(":"+port, mux))
}

func runElectron() {
	loger := log.New(log.Writer(), log.Prefix(), log.Flags())

	// ASTILECTRON APP
	app, err := astilectron.New(loger, astilectron.Options{
		AppName:            "MaximoNet",
		AppIconDefaultPath: "/src/logo.ico",
		AppIconDarwinPath:  "/src/logo.icns",
		BaseDirectoryPath:  "dependencies",
	})
	if err != nil {
		loger.Fatal(fmt.Errorf("main: creating astilectron failed: %w", err))
	}
	defer app.Close()

	// Handle signals in terminal
	//app.HandleSignals()

	if err = app.Start(); err != nil {
		loger.Fatal(fmt.Errorf("main: starting astilectron failed: %w", err))
	}

	var loaderWindow *astilectron.Window

	if loaderWindow, err = app.NewWindow("loader.html", &astilectron.WindowOptions{
		Center: astikit.BoolPtr(true),
		Height: astikit.IntPtr(300),
		Width:  astikit.IntPtr(500),
		Frame:  astikit.BoolPtr(false),
	}); err != nil {
		loger.Fatal(fmt.Errorf("main: new window failed: %w", err))
	}
	//Test comunication wiht javascript astilectron
	loaderWindow.OnMessage(func(m *astilectron.EventMessage) interface{} {
		// Unmarshal
		var s string
		m.Unmarshal(&s)

		// Process message
		if s == "hello" {
			loaderWindow.Close()
			return "world"
		}
		return nil
	})

	time.Sleep(1 * time.Second)
	if err = loaderWindow.Create(); err != nil {
		loger.Fatal(fmt.Errorf("main: creating window failed: %w", err))
	}
	loaderWindow.Show()
	time.Sleep(3 * time.Second)

	var mainWindow *astilectron.Window
	if mainWindow, err = app.NewWindow(urlGui, &astilectron.WindowOptions{
		Center:    astikit.BoolPtr(true),
		Height:    astikit.IntPtr(680),
		MinHeight: astikit.IntPtr(670),
		//Width:     astikit.IntPtr(500),
		Width:     astikit.IntPtr(1150),
		MinWidth:  astikit.IntPtr(1140),
		Frame:     astikit.BoolPtr(false),
		Resizable: astikit.BoolPtr(true),
	}); err != nil {
		loger.Fatal(fmt.Errorf("main: new window failed: %w", err))
	}
	if err = mainWindow.Create(); err != nil {
		loger.Fatal(fmt.Errorf("main: creating window failed: %w", err))
	}

	//mainWindow.OpenDevTools()
	loaderWindow.Close()

	app.Wait()
}

func main() {
	//FOR BUILD > go build -ldflags "-H windowsgui" -o main.exe

	prepareMux := newMux()

	go runServer(prepareMux)

	database.TestConnection()

	runElectron()
}
