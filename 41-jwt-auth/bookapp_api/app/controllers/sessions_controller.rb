class SessionsController < ApplicationController

  def create
    @author = Author.find_by(username: params[:username])
    if @author && @author.authenticate(params[:password])
      payload = { user_id: @author.id }
      token = JWT.encode(payload,'secretkey','HS256')
      render :json => { auth_key: token }
    else
      render :json => { :msg => "Login failed.. Try again" }
    end
  end

end
