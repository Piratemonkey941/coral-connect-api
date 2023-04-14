module Api
    module V1

        class ProductsController < ApplicationController
            def index
                if params[:category].present?
                  @products = Product.where(category: params[:category])
                else
                  @products = Product.all
                end
              
                products_json = @products.map do |product|
                  product.as_json.merge("image" => product.full_image_url(request))
                end
              
                render json: products_json
              end
              

            def categories
                @categories = Product.distinct.pluck(:category)
                render json: @categories
              end
        end
    end
end
