package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
)

func handler(p *httputil.ReverseProxy) func(http.ResponseWriter, *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		log.Println(r.URL)
		p.ServeHTTP(w, r)
	}
}

func main() {
	const (
		defaultPort                = "http://0.0.0.0:9000"
		defaultPortUsage           = "default server port, ':9000'"
		defaultBackendTarget       = "http://server:9001"
		defaultBackendTargetUsage  = "default redirect url, 'http://127.0.0.1:9001'"
		defaultFrontendTarget      = "http://web:9002"
		defaultFrontendTargetUsage = "default redirect url, 'http://127.0.0.1:9002'"
	)

	// flags
	port := flag.String("port", defaultPort, defaultPortUsage)
	backendUrl := flag.String("backend_url", defaultBackendTarget, defaultBackendTargetUsage)
	frontendUrl := flag.String("frontend_url", defaultFrontendTarget, defaultFrontendTargetUsage)

	flag.Parse()

	fmt.Println("server will run on :", *port)
	fmt.Println("redirecting to frontend:", *frontendUrl)
	fmt.Println("redirecting to backend:", *backendUrl)

	// proxy
	frontendUrlParse, err := url.Parse(*frontendUrl)
	if err != nil {
		panic(err)
	}

	backendUrlParse, err := url.Parse(*backendUrl)
	if err != nil {
		panic(err)
	}

	frontendProxy := httputil.NewSingleHostReverseProxy(frontendUrlParse)
	http.HandleFunc("/", handler(frontendProxy))

	backendProxy := httputil.NewSingleHostReverseProxy(backendUrlParse)
	http.HandleFunc("/installment-monthly", handler(backendProxy))

	log.Fatal(http.ListenAndServe(":9000", nil))
}
