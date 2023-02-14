Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do   
      devise_for :users, controllers: { registrations: 'api/v1/registrations' }
      devise_scope :user do
        post 'sign_up', to: 'registrations#create'
        post 'users/sign_in', to: 'sessions#create'
        delete 'users/sign_out', to: 'sessions#destroy'
        get 'listings/index'
        post 'listings/create'
        get '/show/:id', to: 'listings#show'
        delete '/destroy/:id', to: 'listings#destroy'
      end
    end
  end
  
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  
end

