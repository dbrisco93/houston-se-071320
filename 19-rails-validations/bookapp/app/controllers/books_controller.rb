class BooksController < ApplicationController

  before_action :find_book, only: [:show,:edit,:update,:destroy]

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
    @book = Book.new(books_params)

    if @book.valid?
      @book.save
    else
      flash[:message] = @book.errors
    end

    redirect_to books_path
  end

  # GET
  # show.html.erb
  def show
  end

  # GET
  # edit.html.erb
  def edit
  end

  # PATCH
  # redirect
  def update
    @book.update(books_params)
    redirect_to book_path(@book)
  end

  # DELETE
  # redirect
  def destroy
    @book.destroy
    redirect_to '/books'
  end

  private
  def books_params
    params.require(:book).permit(:title,:desc,:author_id)
  end

  def find_book
    @book = Book.find_by(id: params[:id])
  end

end
