class AuthorsController < ApplicationController

  before_action :find_author, only: [:show, :edit, :update, :destroy]

  def index
    @authors = Author.all
  end

  def show
  end

  def new
    @author = Author.new
  end

  def create
    @author = Author.new(author_params)
    if @author.valid?
      @author.save
      flash[:success] = "Author was created!"
      redirect_to author_path(@author)
    else
      flash[:errors] = @author.errors.messages
      redirect_to new_author_path
    end
  end

  def edit
  end

  def update
    @author.update(author_params)
    flash[:success] = "Author was updated!"
    redirect_to author_path(@author)
  end

  def destroy
    if @author.destroy
      flash[:message] = "Author was deleted!"
      redirect_to authors_path
    else
      flash[:message] = "Author deletion failed!"
      redirect_to authors_path
    end
  end

  private
  def author_params
    params.require(:author).permit(:name)
  end

  def find_author
    @author = Author.find_by(id: params[:id])
  end

end
