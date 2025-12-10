package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/kazu-1024/potaslab-app/internal/router"
)

func main() {
	r := gin.Default()
	router.SetupRoutes(r)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	log.Printf("listening :%s", port)
	r.Run(":" + port)
}
