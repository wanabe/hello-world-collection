package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/wanabe/hello-world-collection/graphql/server/gin/gqlgen/graph/generated"
	"github.com/wanabe/hello-world-collection/graphql/server/gin/gqlgen/graph/model"
)

// ReplaceTemplate is the resolver for the replaceTemplate field.
func (r *mutationResolver) ReplaceTemplate(ctx context.Context, input model.NewTemplate) (*bool, error) {
	if input.Hello != nil {
		template.Hello = *input.Hello
	}
	if input.Suffix != nil {
		template.Suffix = *input.Suffix
	}
	return nil, nil
}

// Greeting is the resolver for the greeting field.
func (r *queryResolver) Greeting(ctx context.Context, name string) (*model.Greeting, error) {
	return &model.Greeting{Message: template.Hello + name + template.Suffix}, nil
}

// Template is the resolver for the template field.
func (r *queryResolver) Template(ctx context.Context) (*model.Template, error) {
	return template, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
