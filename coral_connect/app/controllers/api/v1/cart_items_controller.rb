
module Api
    module V1
        class CartItemsController < ApplicationController
            before_action :set_cart_item, only: [:show, :update, :destroy]

            def index
              @cart_items = current_user.cart_items
              render json: @cart_items
            end
          
            def show
              render json: @cart_item
            end
          
            def create
              @cart_item = current_user.cart_items.new(cart_item_params)
          
              if @cart_item.save
                render json: @cart_item, status: :created
              else
                render json: @cart_item.errors, status: :unprocessable_entity
              end
            end
          
            def update
              if @cart_item.update(cart_item_params)
                render json: @cart_item
              else
                render json: @cart_item.errors, status: :unprocessable_entity
              end
            end
          
            def destroy
              @cart_item.destroy
              head :no_content
            end
          
            private
          
            def set_cart_item
              @cart_item = current_user.cart_items.find(params[:id])
            end
          
            def cart_item_params
              params.require(:cart_item).permit(:product_id, :name, :price, :quantity)
            end
        end
    end
end