namespace :db do
    desc "Reseed products only"
    task reseed_products: :environment do
      puts "Reseeding products..."
  
      # Clear existing products
      Product.delete_all
  
      # Load seeds
      load(Rails.root.join('db', 'seeds.rb'))
  
      puts "Reseeding products complete."
    end
  end