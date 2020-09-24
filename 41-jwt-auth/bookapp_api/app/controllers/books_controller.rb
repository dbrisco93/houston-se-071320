class BooksController < ApplicationController

  before_action :find_book, only: [:destroy]

  def index
    @books = Book.all
    render :json => @books.as_json(only: [:id, :title,:author,:img]), :status => :ok
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      render :json => @book.as_json(only: [:id, :title, :author, :img]), :status => :ok
    else
      render :json => { :msg => "Book creation failed.." }, :status => :bad_request
    end
  end

  def destroy
    @book.destroy
    render :json => { :msg => "Book was destroyed" }, :status => :ok
  end

  private
  def book_params
    params.require(:book).permit(:title,:author,:img)
  end

  def find_book
    @book = Book.find_by(id: params[:id])
  end

end
