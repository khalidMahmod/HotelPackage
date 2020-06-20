class Api::V1::PackagesController < Api::V1::BaseController
  def index
    respond_with Package.all.order(created_at: :desc)
  end

  def create
    respond_with :api, :v1, Package.create(package_params)
  end

  def destroy
    respond_with Package.destroy(params[:id])
  end

  def update
    package = Package.find(params["id"])
    package.update_attributes(package_params)
    respond_with package, json: package
  end

  private

  def package_params
    params.require(:package).permit(:id, :hotel_name, :description, :price, :expiry_date, :duration => {})
  end
end