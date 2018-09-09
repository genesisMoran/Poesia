=begin
The following lesson was great help here:
https://git.generalassemb.ly/wdi-nyc-lambda/rails-landlord-api 
=end

class PoemsController < ApplicationController
    def index       
        render json: { poems: Poem.all }
    end
    
    def show        
        @poem = Poem.find(params[:id])
        render json: { poem: @poem }
    end
    
    def create      
        @poem = Poem.new(poem_params)
        if @poem.save
          render json: { poem: @poem }
        else
          render json: { message: "Oops, try again dear.", errors: @poem.errors }, status: :bad_request 
        end
    end

    def poem_params
        params
        .require(:data)
        .permit(
            :title,
            :content,
            :user_id
        )
    end
end
