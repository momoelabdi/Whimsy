Rails.application.routes.draw do
 devise_for :users,  defaults: { format: :json }, controllers: {registrations: 'api/v1/registrations',
    sessions: 'api/v1/sessions'}
  namespace :api do
    namespace :v1 do   
      devise_scope :user do
        get 'users/check', to: 'sessions#check'
        post '/users', to: 'registrations#create'
        post 'users/sign_in', to: 'sessions#create'
        delete 'users/destroy', to: 'sessions#destroy'
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

