class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
    render :index
  end

  def create
    photo = Photo.new(photo_params)
    if photo.save
      render json: {message: "Photo uploaded"}
    else
      render json: photo.errors.full_messages
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :pic)
  end

end