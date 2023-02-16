class Api::V1::ListingsController < ApplicationController
  # before_action :authenticate_user!

  def index
    @listings = Listing.all
    render json: @listings
  end

  def create
    @listing = Listing.new(listing_params)
    if current_user
      session[:user_id] = current_user.id
      @listing.user_id = session[:user_id]
    end
    if @listing.save
      render json: @listing
    else
      render json: @listing.errors
    end
  end
  
  

  def show
    @listing = Listing.find(params[:id])
    render json: @listing
  end

  def destroy
    @listing = Listing.find(params[:id])
    @listing.destroy
    render json: @listing
  end

  def listing_params
    params.require(:listing).permit(:name, :description, :location, :image, :user_id)
  end
    
end
