package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"time"

	"database"

	"github.com/asticode/go-astikit"
	"github.com/asticode/go-astilectron"
)

func index(writer http.ResponseWriter, request *http.Request) {
	indexTemplate := template.Must(template.ParseFiles("ui/build/index.html"))
	indexTemplate.Execute(writer, nil)
}

func main() {
	portGui := "4051"
	urlGui := "http://localhost:" + portGui + "/"

	//Crea el servidor de react. FOR BUILD > go build -ldflags "-H windowsgui" -o main.exe
	go func() {
		sataticsFiles := http.FileServer(http.Dir("ui/build/static/"))
		http.Handle("/static/", http.StripPrefix("/static/", sataticsFiles))
		http.HandleFunc("/", index)

		fmt.Println("Servidor listo y corriendo en el puerto " + portGui + ".")
		fmt.Println("Ya puede abrir la dirección " + urlGui + " en su navegador.")
		http.ListenAndServe(":"+portGui, nil)
	}()

	// Set logger
	loger := log.New(log.Writer(), log.Prefix(), log.Flags())

	// Create astilectron
	app, err := astilectron.New(loger, astilectron.Options{
		AppName:            "simpleApp",
		AppIconDefaultPath: "/src/logo.ico",
		AppIconDarwinPath:  "/src/logo.icns",
		BaseDirectoryPath:  "dependencies",
	})
	if err != nil {
		loger.Fatal(fmt.Errorf("main: creating astilectron failed: %w", err))
	}
	defer app.Close()

	// Handle signals
	app.HandleSignals()

	// Start
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

	time.Sleep(1 * time.Second)
	if err = loaderWindow.Create(); err != nil {
		loger.Fatal(fmt.Errorf("main: creating window failed: %w", err))
	}
	time.Sleep(3 * time.Second)

	var window *astilectron.Window
	if window, err = app.NewWindow(urlGui, &astilectron.WindowOptions{
		Center: astikit.BoolPtr(true),
		Height: astikit.IntPtr(700),
		Width:  astikit.IntPtr(700),
	}); err != nil {
		loger.Fatal(fmt.Errorf("main: new window failed: %w", err))
	}
	if err = window.Create(); err != nil {
		loger.Fatal(fmt.Errorf("main: creating window failed: %w", err))
	}

	loaderWindow.Close()

	database.TestConnection()
	app.Wait()
}
