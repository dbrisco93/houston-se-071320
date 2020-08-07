class BooksController < ApplicationController

  # GET
  # index.html.erb
  def index
    @books = Book.all
  end

  # GET
  # new.html.erb
  def new
    @book = Book.new
  end

  # POST
  # redirect
  def create
    @book = Book.create(books_params)
    redirect_to('/books')
  end

  # GET
  # show.html.erb
  def show
    find_book
  end

  # GET
  # edit.html.erb
  def edit
  end

  # PATCH
  # redirect
  def update
  end

  # DELETE
  # redirect
  def destroy
    find_book.destroy
    redirect_to '/books'
  end

  private
  def books_params
    params.require(:book).permit(:title,:desc)
  end

  def find_book
    @book = Book.find_by(id: params[:id])
  end

end
