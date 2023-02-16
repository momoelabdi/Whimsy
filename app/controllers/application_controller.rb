class ApplicationController < ActionController::Base
    respond_to :json
    before_action :configure_permitted_parameters, if: :devise_controller?

    def configure_permitted_parameters
            devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
    end

    def after_sign_in_path_for(resource)
        request.env['omniauth.origin'] || stored_location_for(resource) || root_path
    end

    def after_sign_out_path_for(resource_or_scope)
        root_path
    end

    def respond_with(resource, _opts = {})
        render json: resource
    end

    def respond_to_on_destroy
        head :no_content
    end
end

