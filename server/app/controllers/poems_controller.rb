=begin
The following lesson was great help here:
https://git.generalassemb.ly/wdi-nyc-lambda/rails-landlord-api 
=end

class PoemsController < ApplicationController
    def index       #R
        render json: { poems: Poem.all }
    end

    def show        #R  
        @poem = Poem.find(params[:id])
        render json: { poem: @poem }
    end

    # def create      #C
    #     @poem = Poem.new(poem_params)
    #     if @new_poem.save
    #       render json: { poem: @new_poem }
    #     else
    #       render json: { message: "Oops, try again dear.", errors: @new_poem.errors }, status: :bad_request 
    #     end
    # end

    # def update      #U
    #     @poem = Poem.find(params[:id])
    #     if @poem.update(poem_params)
    #       render json: @poem.to_json
    #     else
    #       render json: { message: "Oops, try again dear.", errors: poem.errors }, status: :bad_request 
    #     end
    # end

    # def destroy     #D
    #     @poem = Poem.find(params[:id])
    #     @poem.destroy
    #     render json: { message : "Poem #{params[:id]} deleted" }
    # end
end
