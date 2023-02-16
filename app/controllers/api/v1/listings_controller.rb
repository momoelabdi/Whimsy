class Api::V1::ListingsController < ApplicationController
  # before_action :authenticate_user!

  def index
    @listings = Listing.all
    render json: @listings
  end

  def create
    @listing = Listing.new(listing_params)
    
      @listing.user_id = session[:user_id]
    if @listing.save
      render json: @listing
    else
      render json: {error: 'Error creating listing'}
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
