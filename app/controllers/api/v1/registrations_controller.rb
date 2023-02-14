class Api::V1::RegistrationsController < Devise::RegistrationsController
 

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: user.errors
    end
  end

  def update
    user = User.find(params[:email])
    if user.update(user_params)
      render json: user
    else
      render json: user.errors
    end
  end

  def destroy
  end

  private

    def user_params
      params.permit(:email, :password, :password_confirmation)
    end
end
