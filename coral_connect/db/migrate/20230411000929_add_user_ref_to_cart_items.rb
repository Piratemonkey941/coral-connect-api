class AddUserRefToCartItems < ActiveRecord::Migration[7.0]
  def change
    add_reference :cart_items, :user, null: false, foreign_key: true
  end
end
