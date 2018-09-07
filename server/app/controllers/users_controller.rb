=begin
The following lesson was great help here:
https://git.generalassemb.ly/wdi-nyc-lambda/rails-landlord-api 
=end

class UsersController < ApplicationController
  def index         #R
    render json: { users: User.all }
  end

  def show          #R
    @user = User.find(params[:id])
    render json: { user: @user }, include: :poems  
  end

#   def create        #C
#     @new_user = User.new(user_params)
#     if @new_user.save
#       render json: { user: @new_user }, include: :poems    # Not sure if I need to `include` here
#     else
#       render json: { message: "Oops, try again dear.", errors: @new_user.errors }, status: :bad_request 
#     end
#   end

#   def update        #U
#     @user = User.find(params[:id])
#     if @user.update(user_params)
#       render json: @user.to_json(include: :poems)   # Not sure if I need to `include` here
#     else
#       render json: { message: "Oops, try again dear.", errors: user.errors }, status: :bad_request 
#     end
#   end

#   def destroy       #D
#     @user = User.find(params[:id])
#     @user.destroy
#     render json: { message: "User #{params[:id]} deleted" }
#   end
end
