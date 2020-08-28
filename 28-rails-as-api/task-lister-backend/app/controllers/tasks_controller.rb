class TasksController < ApplicationController

  before_action :find_task, only: [:show,:destroy]

  def index
    @tasks = Task.all
    render :json => @tasks, :status => :ok
  end

  def show
  end

  def create
    @task = Task.create(task_params)
    render :json => @task, :status => :created
  end

  def update
  end

  def destroy
    @task.destroy
    render :json => { "message": "The item was destroyed.." }
  end

  private
  def task_params
    params.require(:task).permit(:description)
  end

  def find_task
    @task = Task.find_by(id: params[:id])
  end

end
