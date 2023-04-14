# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ReefWaterElement.create(number: 1, name: 'salinity')
ReefWaterElement.create(number: 2, name: 'calcium')
ReefWaterElement.create(number: 3, name: 'alkilinity')
ReefWaterElement.create(number: 5, name: 'boron')
ReefWaterElement.create(number: 6, name: 'bromide')
ReefWaterElement.create(number: 7, name: 'potassium')
ReefWaterElement.create(number: 8, name: 'strontium')
ReefWaterElement.create(number: 9, name: 'sulfate')
ReefWaterElement.create(number: 10, name: 'barium')
ReefWaterElement.create(number: 11, name: 'chromium')
ReefWaterElement.create(number: 12, name: 'cobalt')
ReefWaterElement.create(number: 13, name: 'copper')
ReefWaterElement.create(number: 14, name: 'fluoride')
ReefWaterElement.create(number: 15, name: 'iodine')
ReefWaterElement.create(number: 16, name: 'iron')
ReefWaterElement.create(number: 17, name: 'lithium')
ReefWaterElement.create(number: 18, name: 'manganese')
ReefWaterElement.create(number: 19, name: 'molybdenum')
ReefWaterElement.create(number: 20, name: 'nickel')
ReefWaterElement.create(number: 21, name: 'rubidium')
ReefWaterElement.create(number: 22, name: 'selenium')
ReefWaterElement.create(number: 23, name: 'vanadium')
ReefWaterElement.create(number: 24, name: 'tin')
ReefWaterElement.create(number: 25, name: 'zinc')


Product.create(
    title: 'Boron Boost 500ml',
    price: 14.99,
    category: 'Reef Water Element',
    description: 'Boron Boost provides the necessary boron levels for optimal coral health and growth. Boron plays a crucial role in maintaining stable pH levels in your reef aquarium.',
    image: '/seed_images/bottle_01.png'
  )
  
  Product.create(
    title: 'Bromide Balance 500ml',
    price: 12.99,
    category: 'Reef Water Element',
    description: 'Bromide Balance helps maintain ideal bromide levels in your reef tank, supporting natural coral coloration and growth.',
    image: '/seed_images/bottle_05.png'
  )
  
  Product.create(
    title: 'Potassium Power 500ml',
    price: 15.99,
    category: 'Reef Water Element',
    description: 'Potassium Power provides the optimal potassium levels required for healthy coral growth, coloration, and overall reef health.',
    image: '/seed_images/bottle_09.png'
  )
  
  Product.create(
    title: 'Strontium Strength 500ml',
    price: 16.99,
    category: 'Reef Water Element',
    description: 'Strontium Strength supplies essential strontium to your reef aquarium, promoting the growth of coralline algae and the skeletal structure of corals.',
    image: '/seed_images/bottle_13.png'
  )
  
  Product.create(
    title: 'Sulfate Support 500ml',
    price: 13.99,
    category: 'Reef Water Element',
    description: 'Sulfate Support helps maintain ideal sulfate levels, enhancing coral growth and overall reef health.',
    image: '/seed_images/bottle_17.png'
  )
  
  Product.create(
    title: 'Barium Boost 500ml',
    price: 15.99,
    category: 'Reef Water Element',
    description: 'Barium Boost provides the necessary barium concentrations for improved coral growth and overall reef health.',
    image: '/seed_images/bottle_02.png'
  )
  
  Product.create(
    title: 'Chromium Care 500ml',
    price: 18.99,
    category: 'Reef Water Element',
    description: 'Chromium Care helps maintain optimal chromium levels, supporting coral coloration and overall health.',
    image: '/seed_images/bottle_06.png'
  )
  
  Product.create(
    title: 'Cobalt Control 500ml',
    price: 17.99,
    category: 'Reef Water Element',
    description: 'Cobalt Control supplies essential cobalt for enhanced coral growth and improved reef health.',
    image: '/seed_images/bottle_10.png'
  )
  
  Product.create(
    title: 'Copper Cure 500ml',
    price: 19.99,
    category: 'Reef Water Element',
    description: 'Copper Cure maintains trace amounts of copper, necessary for the health of certain coral species and overall reef health.',
    image: '/seed_images/bottle_14.png'
  )
  
  Product.create(
    title: 'Fluoride Fix 500ml',
    price: 14.99,
    category: 'Reef Water Element',
    description: 'Fluoride Fix provides the essential fluoride for healthy coral growth and skeletal development.',
    image: '/seed_images/bottle_18.png'
  )
  
  Product.create(
    title: 'Iodine Infusion 500ml',
    price: 16.99,
    category: 'Reef Water Element',
    description: 'Iodine Infusion helps maintain optimal iodine levels for enhanced coral coloration and overall health.',
    image: '/seed_images/bottle_03.png'
  )
  
  Product.create(
    title: 'Iron Fortify 500ml',
    price: 18.99,
    category: 'Reef Water Element',
    description: 'Iron Fortify supplies essential iron to your reef aquarium, promoting the growth of corals, macroalgae, and other photosynthetic organisms.',
    image: '/seed_images/bottle_07.png'
  )
  
  Product.create(
    title: 'Lithium Life 500ml',
    price: 17.99,
    category: 'Reef Water Element',
    description: 'Lithium Life helps maintain trace amounts of lithium, necessary for certain coral species and overall reef health.',
    image: '/seed_images/bottle_11.png'
  )
  
  Product.create(
    title: 'Manganese Magic 500ml',
    price: 15.99,
    category: 'Reef Water Element',
    description: 'Manganese Magic provides essential manganese forhealthy coral growth and improved overall reef health.',
    image: '/seed_images/bottle_15.png'
    ) 
    Product.create(
    title: 'Molybdenum Max 500ml',
    price: 16.99,
    category: 'Reef Water Element',
    description: 'Molybdenum Max helps maintain optimal molybdenum levels, supporting coral growth and overall health.',
    image: '/seed_images/bottle_19.png'
    )
    
    Product.create(
    title: 'Nickel Nourish 500ml',
    price: 18.99,
    category: 'Reef Water Element',
    description: 'Nickel Nourish provides essential nickel for enhanced coral growth and improved reef health.',
    image: '/seed_images/bottle_04.png'
    )
    
    Product.create(
    title: 'Rubidium Revive 500ml',
    price: 17.99,
    category: 'Reef Water Element',
    description: 'Rubidium Revive helps maintain trace amounts of rubidium, necessary for certain coral species and overall reef health.',
    image: '/seed_images/bottle_08.png'
    )
    
    Product.create(
    title: 'Selenium Support 500ml',
    price: 15.99,
    category: 'Reef Water Element',
    description: 'Selenium Support supplies essential selenium for healthy coral growth and overall reef health.',
    image: '/seed_images/bottle_12.png'
    )
    
    Product.create(
    title: 'Vanadium Vitality 500ml',
    price: 16.99,
    category: 'Reef Water Element',
    description: 'Vanadium Vitality helps maintain optimal vanadium levels, supporting coral growth and overall health.',
    image: '/seed_images/bottle_16.png'
    )
  
  Product.create(
    title: 'Tin Tonic 500ml',
    price: 16.99,
    category: 'Reef Water Element',
    description: 'Tin Tonic helps maintain trace amounts of tin, which is essential for the health of certain coral species.',
    image: '/seed_images/bottle_20.png'
  )
  
  Product.create(
    title: 'Zinc Zest 500ml',
    price: 17.99,
    category: 'Reef Water Element',
    description: 'Zinc Zest provides the necessary zinc levels for your reef aquarium, promoting coral growth and overall reef health.',
    image: '/seed_images/product_04.png'
  )
  Product.create(
    title: 'Reef Guardian Kit',
    price: 79.99,
    category: 'Reef Conservation',
    description: 'A comprehensive package that includes tools and guides for monitoring coral health, identifying marine species, and participating in local reef conservation efforts.',
    image: '/seed_images/product_01.png'
  )
  
  Product.create(
    title: 'Coral Gardening Kit',
    price: 59.99,
    category: 'Reef Education',
    description: 'A beginner-friendly kit with supplies and instructions for growing coral fragments in a home aquarium, promoting awareness and understanding of coral reef ecosystems.',
    image: '/seed_images/product_01.png'
  )
  
  Product.create(
    title: 'Virtual Reef Dive Experience',
    price: 49.99,
    category: 'Reef Education',
    description: 'An immersive virtual reality (VR) program that allows users to explore and learn about coral reefs from the comfort of their own homes.',
    image: '/seed_images/product_05.png'
  )
  
  Product.create(
    title: 'Reef Identification Cards',
    price: 24.99,
    category: 'Reef Education',
    description: 'A set of waterproof, pocket-sized cards featuring detailed illustrations and descriptions of common coral and marine species found in various reef ecosystems.',
    image: '/seed_images/product_09.png'
  )
  
  Product.create(
    title: 'Reef-Safe Sunscreen',
    price: 19.99,
    category: 'Reef Conservation',
    description: 'A high-quality, eco-friendly sunscreen that is free of harmful chemicals that can damage coral reefs, promoting safe and responsible sun protection.',
    image: '/seed_images/product_02.png'
  )
  
  Product.create(
    title: 'Coral Reef Conservation Board Game',
    price: 39.99,
    category: 'Reef Education',
    description: 'An engaging, educational board game that teaches players about the importance of coral reef ecosystems and the challenges they face, such as climate change, pollution, and overfishing.',
    image: '/seed_images/product_06.png'
  )
  
  Product.create(
    title: 'Adopt-A-Coral Program',
    price: 35.00,
    category: 'Reef Conservation',
    description: 'A symbolic adoption program that allows individuals or groups to financially support coral restoration and conservation projects in exchange for regular updates and exclusive content about their adopted coral.',
    image: '/seed_images/product_10.png'
  )
  
  Product.create(
    title: 'Reef Smart Clothing Line',
    price: 29.99, 
    category: 'Reef Conservation',
    description: 'A range of eco-friendly, sustainably sourced clothing featuring designs inspired by coral reefs and their inhabitants, with a portion of proceeds donated to reef conservation initiatives.',
    image: '/seed_images/product_03.png'
  )
  
  Product.create(
    title: 'Coral Reef Cookbook',
    price: 34.99,
    category: 'Reef Education',
    description: 'A collection of sustainable seafood recipes and guides on how to make environmentally conscious choices when shopping for and consuming seafood, to help reduce pressure on reef ecosystems.',
    image: '/seed_images/product_07.png'
  )
  
  Product.create(
    title: 'DIY Reef Cleanup Kit',
    price: 49.99,
    category: 'Reef Conservation',
    description: 'A set of reusable tools and resources for individuals or groups to organize their own reef cleanup events, including gloves, mesh bags, and educational materials about the impact of marine debris on coral reefs.',
    image: '/seed_images/product_11.png'
    )