Rails.application.routes.draw do
  get 'projects/index'

  get 'projects/update'

  post 'projects/update'

  get 'projects/create'

  post 'projects/create'

  root 'projects#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
