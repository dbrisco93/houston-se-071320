class BooksController < ApplicationController

  before_action :find_book, only: [:destroy]
  before_action :authenticate!, only: [:index,:destroy]

  def index
    if current_author
      @books = Book.all
      render :json => @books.as_json(
        include: [:author]
        ), :status => :ok
    else
      render :json => { :msg => "Login first.." }
    end
  end

  def create
    @book = Book.new(book_params)
    @book.author = current_author

    if @book.save
      render :json => @book.as_json(only: [:id, :title, :img]), :status => :ok
    else
      render :json => { :msg => "Book creation failed.." }, :status => :bad_request
    end
  end

  def destroy
    if @book.author == current_author
      @book.destroy
      render :json => { :msg => "Book was destroyed" }, :status => :ok
    else
      render :json => { :msg => "You ain't authorized." }, :status => :ok
    end
  end

  private
  def book_params
    params.require(:book).permit(:title,:img)
  end

  def find_book
    @book = Book.find_by(id: params[:id])
  end

end
