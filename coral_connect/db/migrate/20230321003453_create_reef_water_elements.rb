class CreateReefWaterElements < ActiveRecord::Migration[7.0]
  def change
    create_table :reef_water_elements do |t|
      t.integer :number
      t.string :name
      

      t.timestamps
    end
  end
end
