Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    namespace :v1 do   
      devise_scope :user do
        mount_devise_token_auth_for 'User', at: 'api/v1/auth'
        # get 'users/check', to: 'sessions#check'
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

