Rails.application.routes.draw do

  namespace :api do
    devise_for :users, controllers: {registrations: 'users/registrations',
      sessions: 'users/sessions'}
    namespace :v1 do   
      devise_scope :user do
        # get 'users/check', to: 'sessions#check'
        post '/users', to: 'registrations#create'
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

