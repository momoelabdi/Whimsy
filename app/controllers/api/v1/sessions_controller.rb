class Api::V1::SessionsController < Devise::SessionsController
  skip_before_action :verify_signed_out_user, only: :destroy

  def create
    user = User.find_by(email: params[:email])
    if user&.valid_password?(params[:password])
      sign_in(user)
      render json: { success: true }
    else
      render json: { success: false }
    end
  end

  def destroy
    sign_out(current_user)
    render json: { success: true }
  end
end
