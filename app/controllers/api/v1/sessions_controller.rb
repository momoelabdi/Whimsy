class Api::V1::SessionsController < Devise::SessionsController
  respond_to :json
  def create
    super do |user|
      if request.format.json?
        data = {
          user: user,
          auth_token: user.authentication_token,
          email: user.email
        }
        render json: data, status: 201 and return
      end
    end  
  end

  def check
    if user_signed_in?
      render json: {isLoggedIn: true}, status: 201 and return
    else
      render json: {isLoggedIn: false}, status: 201 and return
    end
  end

  def destroy
    super do |user|
      if request.format.json?
        render json: {isLoggedIn: false}, status: 201 and return
      end
    end
  end

end
