class Api::V1::SessionsController < Devise::SessionsController

  def create
    user = User.find_by(email: params[:email])
    if user&.valid_password?(params[:password])
      sign_in(user)
      render json: user
    else
      render json: user.errors
    end
  end

  def check
    if current_user
      render json: {user: current_user, isLoggedIn: true}
    else
      render json: {isLoggedIn: false}
    end
  end

  def destroy
    sign_out(current_user)
    render json: { message: 'Logged out' }
  end

  private

    def user_params
      params.permit(:email, :password)
    end
end
