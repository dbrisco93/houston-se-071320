Rails.application.routes.draw do
  # resources :authors
  resources :books
  post '/signup', to: 'authors#create'
  post '/login', to: 'sessions#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end