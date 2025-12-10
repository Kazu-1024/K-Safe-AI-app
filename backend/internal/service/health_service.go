package service

import "github.com/kazu-1024/potaslab-app/internal/model"

func CheckHealth() model.Health {
	return model.Health{Status: "ok"}
}
