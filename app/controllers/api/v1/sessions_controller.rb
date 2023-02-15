class Api::V1::SessionsController < Devise::SessionsController
  # skip_before_action :verify_signed_out_user
  # prepend_before_action :verify_signed_out_user, only: :destroy
  # skip_before_action :verify_authenticity_token
  def create
    user = User.find_by(email: params[:email])
    if user&.valid_password?(params[:password])
      sign_in(user)
      render json: user
    else
      render json: user.errors, status: :unauthorized
    end
  end

  def check
    if signed_in?
      render json: {isLoggedIn: true}
    else
      render json: {isLoggedIn: false}
    end
  end

  def destroy
      if sign_out(resource_name)
        render json: { success: true }
      else
        render json: { error: 'Logout failed' }, status: :unprocessable_entity
      end
    
  end
  

  private

    def user_params
      params.permit(:email, :password)
    end
end
