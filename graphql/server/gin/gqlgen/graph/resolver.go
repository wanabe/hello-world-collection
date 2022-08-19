package graph

import (
	"github.com/99designs/gqlgen/api"
	"github.com/wanabe/hello-world-collection/graphql/server/gin/gqlgen/graph/model"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

//go:generate go run github.com/99designs/gqlgen generate

type Resolver struct{}

var template = &model.Template{
	Hello:  "Hello, ",
	Suffix: "!",
}

var A = api.Generate
