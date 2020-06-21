require 'rails_helper'

describe "post a package route", :type => :request do
  before do
    post '/api/v1/packages.json', params: { package: {
          :hotel_name => 'Radission Blue Hotel',
          :description => 'Amazing offer for couples',
          :price => '200.0',
          :expiry_date => '2020-08-01',
          :duration => { 'days': 3, 'nights': 2 }
        }}
  end

  it 'returns the hotel name' do
    expect(JSON.parse(response.body)['hotel_name']).to eq('Radission Blue Hotel')
  end

  it 'returns the package description' do
    expect(JSON.parse(response.body)['description']).to eq('Amazing offer for couples')
  end

  it 'returns the price' do
    expect(JSON.parse(response.body)['price']).to eq('200.0')
  end

  it 'returns a created status' do
    expect(response).to have_http_status(:created)
  end
end