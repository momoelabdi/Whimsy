Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'listings/index'
      post 'listings/create'
      get '/show/:id', to: 'listings#show'
      delete '/destroy/:id', to: 'listings#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
