class AuthorsController < ApplicationController

  def create
    @author = Author.create(authors_params)
    payload = { author_id: @author.id }
    token = JWT.encode(payload,ENV['SUPER_SECRET_KEY'],'HS256')
    render :json => { :auth_key => token }, :status => :ok
  end

  private
  def authors_params
    params.require(:author).permit(:username,:password)
  end

end
