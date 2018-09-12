=begin
The following lesson was great help here:
https://git.generalassemb.ly/wdi-nyc-lambda/rails-landlord-api 
=end

# Version 1 - Only show all and show one
# Read of CRUD
class UsersController < ApplicationController
  def index      
    render json: { users: User.all }
  end

  def show    
    @user = User.find(params[:id])
    render json: { user: @user }, include: :poems  
  end

  def user_params
    params
    .require(:data)
    .permit(
        :first_name,
        :last_name
    )
  end
end
