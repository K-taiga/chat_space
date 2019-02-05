class MessagesController < ApplicationController
  def index
    @user = "Kobatai"
    @group ="Sample"
    @time = "2019/2/3 15:00"
    @message = "こんにちは"
    @member ="MEMBER:#{@user}"
  end

  def create
  end
end
