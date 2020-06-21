require 'rails_helper'
describe "PUT /api/v1/packages/:id.json", :type => :request do
  before(:each) do
    @package = FactoryBot.create(:random_package)
  end
  it 'updates a package' do
    @new_hotel_name = Faker::Company.name
    @new_package_description = Faker::Lorem.paragraph(sentence_count: 2)
    put "/api/v1/packages/#{@package.id}.json", params: { package: {
        hotel_name: @new_hotel_name, description: @new_package_description
    }}
    expect(response.status).to eq(200)
    expect(Package.find(@package.id).hotel_name).to eq(@new_hotel_name)
    expect(Package.find(@package.id).description).to eq(@new_package_description)
  end
end