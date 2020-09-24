class AuthorsController < ApplicationController

  def create
    @author = Author.create(authors_params)
    payload = { user_id: @author.id }
    token = JWT.encode(payload,'secretkey','HS256')
    render :json => { :auth_key => token }, :status => :ok
  end

  private
  def authors_params
    params.require(:author).permit(:username,:password)
  end

end
