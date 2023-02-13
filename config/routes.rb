Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do   
      devise_for :users, controllers: { registrations: 'api/v1/registrations' }
      devise_scope :user do
        post 'sign_up', to: 'registrations#create'
        post 'sign_in', to: 'sessions#create'
        delete 'sign_out', to: 'sessions#destroy'
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

# namespace :api do
#   devise_for :users 
#   namespace :v1 do   
#     devise_scope :user do
#       post '/api/v1/sign_up', to: 'api/v1/registrations#create'
#     end
#           # post 'sign_up', to: 'registrations#create'
#           post 'sign_in', to: 'sessions#create'
#           delete 'sign_out', to: 'sessions#destroy'
#           get 'listings/index'
#         # end
#           post 'listings/create'
#           get '/show/:id', to: 'listings#show'
#           delete '/destroy/:id', to: 'listings#destroy'
#   end
# end
# root 'homepage#index'
# get '/*path' => 'homepage#index'

# controllers: { registrations: 'api/v1/registrations', sessions: 'api/v1/sessions' }
 
