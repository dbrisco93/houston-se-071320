class BookController < ApplicationController

  configure do
    set :views, 'app/views/books'
  end

  # Index
  # GET /books
  # List all the books
  get "/books" do
    @books = Book.all
    erb :index
  end

  # New
  # GET /books/new
  # New Book Form
  get '/books/new' do
    @authors = Author.all
    erb :new
  end

  # Create
  # POST /books
  # Persist the book / Handle new form submission
  post '/books' do
    @book = Book.new(params[:book])
    @book.save

    # @books = []
    # redirect to('/books')
    redirect to("/books/#{@book.id}")

  end

  # Show
  # GET /books/:id
  # See an individual book
  get '/books/:id' do

    @book = Book.find_by(id: params[:id])

    if @book.nil?
      redirect to('/books')
    else
      erb :show
    end
  end

  # Edit
  # GET /books/:id/edit
  # Give me a form to edit existing book
  get '/books/:id/edit' do
    @book = Book.find_by(id: params[:id])

    if @book.nil?
      redirect to('/books')
    else
      erb :edit
    end
  end

  # Update
  # PATCH /books/:id
  # Handle form submission from edit page
  patch '/books/:id' do
    @book = Book.find_by(id: params[:id])

    @book.update(params[:book])
    redirect to("/books/#{@book.id}")
  end

  # Delete
  # DELETE /books/:id
  # Deletes a book from db and redirect to index
  delete '/books/:id' do
    @book = Book.find_by(id: params[:id])

    if @book.nil?
      redirect to('/books')
    else
      @book.destroy
      redirect to('/books')
    end
  end

end
