class CreatePackages < ActiveRecord::Migration[6.0]
  def change
    create_table :packages do |t|
      t.string :hotel_name
      t.decimal :price
      t.json :duration
      t.datetime :expiry_date
      t.text :description

      t.timestamps
    end
  end
end
