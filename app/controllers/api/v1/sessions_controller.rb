class Api::V1::SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])
    if user&.valid_password?(params[:password])
      sign_in(user)
      render json: {success : true}
    else
      render json: { errors: ['Invalid username/password'] }, status: :unauthorized
    end
  end

  def destroy
    sign_out(current_user)
    render json: {success : true}
  end
end
