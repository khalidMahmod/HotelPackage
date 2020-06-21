require 'rails_helper'

describe "delete package route", :type => :request do
  before(:each) do
    @package_one = FactoryBot.create(:random_package)
    @package_two = FactoryBot.create(:random_package)
  end
  it 'should delete the package' do
    get "/api/v1/packages.json"
    expect(response.status).to eq(200)
    ids = JSON.parse(response.body).map { |a| a['id'] }
    expect(ids.sort).to eq([@package_one.id, @package_two.id].sort)
    delete "/api/v1/packages/#{@package_one.id}.json"
    expect(response.status).to eq(204)
    get "/api/v1/packages.json"
    expect(JSON.parse(response.body).map { |a| a['id'] }).to eq([@package_two.id])
  end
end