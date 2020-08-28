class UsersController < ApplicationController

  before_action :find_user, only: [:show]

  def index
    @users = User.all
    render :json => @users, :include => :tasks
  end

  def show
    render :json => @user.user_profile
  end

  private
  def find_user
    @user = User.find_by(id: params[:id])
  end

end
