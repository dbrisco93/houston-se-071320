class AuthorController < ApplicationController

  configure do
    set :views, 'app/views/authors'
  end

  # Index
  # GET /authors
  # List all the authors
  get "/authors" do
    @authors = Author.all
    erb :index
  end

  # Show
  # GET /books/:id
  # See an individual book
  get '/authors/:id' do

    @author = Author.find_by(id: params[:id])

    if @author.nil?
      redirect to('/authors')
    else
      erb :show
    end
  end


end
