Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    namespace :v1 do
      get 'users/create'
      post 'users/register', to: 'users#register'
      post 'sign_in', to: 'sessions#create'
      delete 'sign_out', to: 'sessions#destroy'
      get 'listings/index'
      post 'listings/create'
      get '/show/:id', to: 'listings#show'
      delete '/destroy/:id', to: 'listings#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
