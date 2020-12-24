package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"log"

	"github.com/LuisFlahan4051/maximonet/api/database"
	"github.com/LuisFlahan4051/maximonet/api/graph/generated"
	"github.com/LuisFlahan4051/maximonet/api/graph/model"
)

func (r *mutationResolver) AddBranch(ctx context.Context, input *model.NewBranch) (*model.Branch, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) DeleteBranchByID(ctx context.Context, input *model.BranchByID) (*model.Branch, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) UpdateBranch(ctx context.Context, input *model.NewBranch) (*model.Branch, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) AddProduct(ctx context.Context, input *model.NewProduct) (*model.Product, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) AddProductToBranch(ctx context.Context, input *model.NewProduct) (*model.Product, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) AddProductToControl(ctx context.Context, input *model.NewProduct) (*model.Product, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) DeleteProductByID(ctx context.Context, input *model.ProductByID) (*model.Product, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) UpdateProduct(ctx context.Context, input *model.NewProduct) (*model.Product, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) AddArticle(ctx context.Context, input *model.NewArticle) (*model.Article, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) AddArticleToBranch(ctx context.Context, input *model.NewArticle) (*model.Article, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) AddArticleToControl(ctx context.Context, input *model.NewArticle) (*model.Article, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) DeleteArticleByID(ctx context.Context, input *model.ArticleByID) (*model.Article, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) UpdateArticle(ctx context.Context, input *model.NewArticle) (*model.Article, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) AddUser(ctx context.Context, input *model.NewUser) (*model.User, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) DeleteUserByID(ctx context.Context, input *model.UserByID) (*model.User, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) UpdateUser(ctx context.Context, input *model.NewUser) (*model.User, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Branches(ctx context.Context, id *string) ([]*model.Branch, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Products(ctx context.Context, id *string, idBranch *int, idControl *int) ([]*model.Product, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Articles(ctx context.Context, id *string, idBranch *int, idControl *int) ([]*model.Article, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Users(ctx context.Context, id *string, idBranch *int) ([]*model.User, error) {
	db := database.Connect()
	defer db.Close()

	var users []*model.User

	query := "SELECT * FROM users"
	rows, err := db.Query(query)

	if idBranch != nil {
		query = "SELECT * FROM users WHERE id_branch = $1"
		rows, err = db.Query(query, *idBranch)
	} else if id != nil {
		query = "SELECT * FROM users WHERE id_user = $1"
		rows, err = db.Query(query, *id)
	}

	if err != nil {
		log.Fatal("Failed to execute query: ", err)
	}

	for rows.Next() {
		var scanUser model.User
		err := rows.Scan(
			&scanUser.ID,
			&scanUser.Name,
			&scanUser.LastName,
			&scanUser.Nickname,
			&scanUser.Mail,
			&scanUser.Phone,
			&scanUser.Password,
			&scanUser.Admin,
			&scanUser.Root,
			&scanUser.RegistrationDate,
			&scanUser.IDBranch,
		)
		if err != nil {
			log.Fatal(err)
		}

		newUser := &model.User{
			ID:               scanUser.ID,
			Name:             scanUser.Name,
			LastName:         scanUser.LastName,
			Nickname:         scanUser.Nickname,
			Mail:             scanUser.Mail,
			Phone:            scanUser.Phone,
			Password:         scanUser.Password,
			Admin:            scanUser.Admin,
			Root:             scanUser.Root,
			RegistrationDate: scanUser.RegistrationDate,
			IDBranch:         scanUser.IDBranch,
		}

		users = append(users, newUser)
	}

	return users, err
}

func (r *queryResolver) ValidateUser(ctx context.Context, userData *string, password *string) (*model.User, error) {
	db := database.Connect()
	defer db.Close()

	var scanUser model.User

	if *userData != "" && *password != "" {
		query := "SELECT * FROM users WHERE" +
			"(nickname_user = $1 AND password_user = $2)" +
			"OR" +
			"(phone_user = $1 AND password_user = $2)" +
			"OR" +
			"(mail_user = $1 AND password_user = $2)"
		err := db.QueryRow(query, userData, password).Scan(
			&scanUser.ID,
			&scanUser.Name,
			&scanUser.LastName,
			&scanUser.Nickname,
			&scanUser.Mail,
			&scanUser.Phone,
			&scanUser.Password,
			&scanUser.Admin,
			&scanUser.Root,
			&scanUser.RegistrationDate,
			&scanUser.IDBranch,
		)

		if err != nil {
			return nil, err
		}

		newUser := &model.User{
			ID:               scanUser.ID,
			Name:             scanUser.Name,
			LastName:         scanUser.LastName,
			Nickname:         scanUser.Nickname,
			Mail:             scanUser.Mail,
			Phone:            scanUser.Phone,
			Password:         scanUser.Password,
			Admin:            scanUser.Admin,
			Root:             scanUser.Root,
			RegistrationDate: scanUser.RegistrationDate,
			IDBranch:         scanUser.IDBranch,
		}

		return newUser, err
	}

	var err error

	return nil, err
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
