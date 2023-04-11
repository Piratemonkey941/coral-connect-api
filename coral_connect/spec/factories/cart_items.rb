FactoryBot.define do
  factory :cart_item do
    id { 1 }
    product_id { 1 }
    name { "MyString" }
    price { 1.5 }
    quantity { 1 }
  end
end
