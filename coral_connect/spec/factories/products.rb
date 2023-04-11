FactoryBot.define do
  factory :product do
    id { 1 }
    title { "MyString" }
    price { 1.5 }
    category { "MyString" }
    description { "MyText" }
    image { "MyString" }
  end
end
