class Product < ApplicationRecord
    has_many :cart_items
    def full_image_url(request)
        "#{request.protocol}#{request.host_with_port}#{self.image}"
    end
end
