class ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def update
    if params.include? :todo
      @todo = Todo.find params[:todo][:id]
      @todo.isCompleted = !@todo.isCompleted
      @todo.save
    end

    redirect_to '/'
  end

  def create
    if params.include? :todo
      @project = Project.find params[:todo][:project_id]
      @todo = Todo.new params.require(:todo).permit(:project_id, :text)
      @todo.isCompleted = false
      @project.todos << @todo
    end

    redirect_to '/'             # ???
  end
end
