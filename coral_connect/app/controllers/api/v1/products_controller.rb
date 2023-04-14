module Api
    module V1

        class ProductsController < ApplicationController
            def index
                if params[:category].present?
                  @products = Product.where(category: params[:category])
                else
                  @products = Product.all
                end
                render json: @products
              end

            def categories
                @categories = Product.distinct.pluck(:category)
                render json: @categories
              end
        end
    end
end
