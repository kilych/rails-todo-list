class ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def update
  end

  def create
    if params.include? :todo
      @project = Project.find params[:todo][:project_id]
      @todo = Todo.new params.require(:todo).permit(:project_id, :text)
      @todo.isCompleted = false
      @project.todos << @todo
    end

    redirect_to '/' # bad
  end
end
