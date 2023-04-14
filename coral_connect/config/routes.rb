# frozen_string_literal: true

Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  require 'sidekiq/web'

  scope :monitoring do
    # Sidekiq Basic Auth from routes on production environment
    if Rails.env.production?
      Sidekiq::Web.use Rack::Auth::Basic do |username, password|
        ActiveSupport::SecurityUtils.secure_compare(::Digest::SHA256.hexdigest(username),
                                                    ::Digest::SHA256.hexdigest(Rails.application.credentials.sidekiq[:auth_username])) &
          ActiveSupport::SecurityUtils.secure_compare(::Digest::SHA256.hexdigest(password),
                                                      ::Digest::SHA256.hexdigest(Rails.application.credentials.sidekiq[:auth_password]))
      end
    end
    mount Sidekiq::Web, at: '/sidekiq'
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      namespace :users do
        post :login
        delete :logout
        get :me
        post :create
      end
  
      resources :users do
        resources :element_measurements, only: [:index, :create, :show, :update, :destroy]
      end
      
      resources :element_measurements, only: [:index,  :create]

      resources :products, only: [:index] do
        collection do
          get :categories
        end
      end
      resources :cart_items
    end
  end
  
end


 # POST http://localhost:3000/api/v1/users/login
  # DELETE http://localhost:3000/api/v1/users/logout
  # GET http://localhost:3000/api/v1/users/me
  # POST http://localhost:3000/api/v1/users/create
  # resources :users do
  #   resources :element_measurements, only: [:index, :create]
  # end
  
  # resources :element_measurements, only: [:index, :show, :create, :update, :destroy]
