Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'listings/index'
      get 'listings/create'
      get 'listings/show'
      get 'listings/destroy'
    end
  end
  root 'homepage#index'
end
