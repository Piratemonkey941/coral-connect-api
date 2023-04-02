class CreateElementMeasurements < ActiveRecord::Migration[6.1]
  def change
    create_table :element_measurements do |t|
      
      t.float :qt, null: false
      t.references :reef_water_elements, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
