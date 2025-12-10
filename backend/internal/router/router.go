package router

import (
	"github.com/gin-gonic/gin"
	"github.com/kazu-1024/potaslab-app/internal/handler"
	"github.com/kazu-1024/potaslab-app/internal/middleware"
)

func SetupRoutes(r *gin.Engine) {
	r.Use(middleware.Cors())

	r.GET("/api/health", handler.HealthCheck)
}
