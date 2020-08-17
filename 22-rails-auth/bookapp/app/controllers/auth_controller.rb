class AuthController < ApplicationController

  def login
    render :login
  end

  def verify
    @author = Author.find_by(name: login_params[:name])

    if @author && @author.authenticate(login_params[:password])
      session[:user_id] = @author.id
      redirect_to books_path
    else
      flash[:error] = 'Login failed..'
      redirect_to login_path
    end
  end

  def logout
    session[:user_id] = nil
    redirect_to login_path
  end

  private
  def login_params
    params.require(:login).permit(:name,:password)
  end

end
