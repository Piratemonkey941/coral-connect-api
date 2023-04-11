class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :title
      t.decimal :price
      t.string :category
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end


# class CreateProducts < ActiveRecord::Migration[7.0]
#   def change
#     create_table :products do |t|
#       t.integer :id
#       t.string :title
#       t.float :price
#       t.string :category
#       t.text :description
#       t.string :image

#       t.timestamps
#     end
#   end
# end

