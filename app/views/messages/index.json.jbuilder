json.array! @new_messages |new_message|
  json.user_name new_message.user.name
  json.date new_message.created_at
  json.content new_message.content
  json.image new_message.image
end
