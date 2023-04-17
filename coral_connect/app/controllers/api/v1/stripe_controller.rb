class Api::V1::StripeController < ApplicationController
    # app/controllers/stripe_controller.rb
    def create_checkout_session
      begin
        line_items = []
        # Retrieve cart items and create line items for the checkout session
        current_user.cart_items.each do |item|
          line_items << {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.name,
              },
              unit_amount: (item.price * 100).to_i,
            },
            quantity: item.quantity,
          }
        end
  
        session = Stripe::Checkout::Session.create(
          payment_method_types: ['card'],
          line_items: line_items,
          mode: 'payment',
          success_url: YOUR_SUCCESS_URL, #replace with actual url
          cancel_url: YOUR_CANCEL_URL,   #replace with actual url
        )
  
        render json: { url: session.url }, status: :ok
      rescue => e
        render json: { error: e.message }, status: :unprocessable_entity
      end
    end
  
    # app/controllers/stripe_controller.rb
    def webhook
      payload = request.body.read
      sig_header = request.env['HTTP_STRIPE_SIGNATURE']
      event = nil
  
      begin
        event = Stripe::Webhook.construct_event(
          payload, sig_header, Rails.application.credentials.stripe[:webhook_secret]
        )
      rescue JSON::ParserError => e
        # Invalid payload
        status 400
        return
      rescue Stripe::SignatureVerificationError => e
        # Invalid signature
        status 400
        return
      end
  
      # Handle the event
    case event.type
    when 'payment_intent.succeeded'
        payment_intent = event.data.object
    # ... handle other event types
    else
        puts "Unhandled event type: #{event.type}"
    end
    
      status 200
    end
  end
  