=begin
The following lesson was great help here:
https://git.generalassemb.ly/wdi-nyc-lambda/rails-landlord-api 
=end

# FULL CRUD ON POEMS 
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

    def update
        @poem = Poem.find(params[:id])
        if @poem.update(poem_params)
            render json: @poem.to_json(include: :users) 
        else
            render json: { message: "Oops, try again dear.", errors: poem.errors }, status: :bad_request
        end
    end

    def destroy
        @poem = Poem.find(params[:id])
        @poem.destroy
        render json: { message: "Poem #{params[:id]} deleted" }
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

# NOTES
# Line 28: Might not need to `include: :users`
# Line 31: `@poem.errors` or `poem.errors`
