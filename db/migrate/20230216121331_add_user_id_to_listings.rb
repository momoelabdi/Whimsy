class AddUserIdToListings < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :user_id, :integer

  end
end
