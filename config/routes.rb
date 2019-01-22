Rails.application.routes.draw do
  root  'messages_controller#index'
  get 'messages_controller/index'

end
