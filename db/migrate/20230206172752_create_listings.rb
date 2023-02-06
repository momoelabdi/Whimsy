class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :name, null: false
      t.text :location, null: false
      t.text :description, null: false
      t.string :image, default: 'https://images.unsplash.com/photo-1542732270-4e6a7a68d8d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'

      t.timestamps
    end
  end
end
