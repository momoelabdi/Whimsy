class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :name, null: false
      t.text :location, null: false
      t.text :description, null: false
      t.string :image, default: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Photo_of_image_saab.png'
      t.timestamps
    end
  end
end
