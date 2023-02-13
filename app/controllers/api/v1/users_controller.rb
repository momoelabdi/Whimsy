class Api::V1::UsersController < ApplicationController


    def create
        user = User.new(user_params)
        if user.save
        render json: { success: true }
        else
        render json: { success: false }
        end
        redirect_to root_path
    end

    def register
        user = User.new(user_params)
        if user.save
        render json: { success: true }
        else
        render json: { success: false }
        end
        redirect_to root_path
    end

    private
    
    def user_params
        params.permit(:email, :password, :password_confirmation)
    end

end
