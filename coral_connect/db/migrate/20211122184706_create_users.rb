class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :phone, null: false
      t.string :password_digest, null: false
      t.boolean :invitation_accepted, default: false
      t.string :invitation_token
      t.datetime :invitation_expiration

      t.timestamps
    end
    add_index :users, :email, unique: true
  end
end

# HOW TO CREATE A USER IN // console
# User.create(email: 'example@example.com', first_name: 'John', last_name: 'Doe', phone: '1234567890', 
# password: 'password', password_confirmation: 'password')
