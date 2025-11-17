package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kazu-1024/k-safe-ai-app/internal/service"
)

func HealthCheck(c *gin.Context) {
	status := service.CheckHealth()
	c.JSON(http.StatusOK, status)
}
