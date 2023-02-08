class Api::V1::ListingsController < ApplicationController
  def index
    @listings = Listing.all
    render json: @listings
  end

  def create
    @listing = Listing.create!(listing_params)
    if @listing
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
    params.permit(:name, :description, :location, :image)
  end
end
