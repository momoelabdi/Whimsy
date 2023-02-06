class Api::V1::ListingsController < ApplicationController
  def index
    @listings = Listing.all
    render json: @listings
  end

  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      render :show, status: :created
    else
      render json: @listing.errors, status: :unprocessable_entity
    end
  end

  def show
    @listing = Listing.find(params[:id])
    render json: @listing
  end

  def destroy
    @listing = Listing.find(params[:id])
    @listing.destroy
    # render json: @listing
  end

  def listing_params
    params.permit(:name, :description, :lication, :image)
  end
end
