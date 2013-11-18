Rails.application.routes.draw do
  match 'home' => 'home#index', :view => :get
end
