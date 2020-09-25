class SessionsController < ApplicationController

  def create
    @author = Author.find_by(username: params[:username])
    if @author && @author.authenticate(params[:password])
      payload = { author_id: @author.id }
      token = JWT.encode(payload,ENV['SUPER_SECRET_KEY'],'HS256')
      render :json => { auth_key: token }
    else
      render :json => { :msg => "Login failed.. Try again" }
    end
  end

end
