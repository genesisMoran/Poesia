Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :poems
  resources :users
end

#   resources :poems do
#     resources :users, only: [:create, :index]
#   end
#   resources :users
# end
