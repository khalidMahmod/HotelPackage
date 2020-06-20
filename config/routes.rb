Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :packages, only: [:index, :create, :destroy, :update]
    end
  end
  root to: 'site#home'
end