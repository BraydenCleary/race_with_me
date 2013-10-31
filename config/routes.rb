RaceWithMe::Application.routes.draw do
  root to: "pages#home"

  resources :races
end
