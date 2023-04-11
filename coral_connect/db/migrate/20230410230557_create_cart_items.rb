class CreateCartItems < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_items do |t|
      t.integer :product_id
      t.string :name
      t.float :price
      t.integer :quantity

      t.timestamps
    end
  end
end
