class CreateElementMeasurements < ActiveRecord::Migration[6.1]
  def change
    create_table :element_measurements do |t|
      
      t.float :qt, null: false
      t.references :reef_water_element, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

# Looks good :thumbsup:

# Awesome Thanks for checking it! just a little coding victory for today,
# but i'll take it!