=begin
The following lesson was great help here:
https://git.generalassemb.ly/wdi-nyc-lambda/rails-landlord-api 
=end

class UsersController < ApplicationController
  def index      
    render json: { users: User.all }
  end

  def show    
    @user = User.find(params[:id])
    render json: { user: @user }, include: :poems  
  end
end
