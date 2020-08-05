class AuthorController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views/authors'
    set :method_override, true
  end

  # Index
  # GET /authors
  # List all the authors
  get "/authors" do
    @authors = Author.all
    erb :index
  end


end
