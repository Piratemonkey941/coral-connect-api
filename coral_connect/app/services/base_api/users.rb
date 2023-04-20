# frozen_string_literal: true

module BaseApi
  module Users
    def self.new_user(params)
      user = User.new(
        first_name: params[:first_name],
        last_name: params[:last_name],
        email: params[:email],
        phone: params[:phone],
        password: params[:password],
        password_confirmation: params[:password_confirmation]
      )
      begin
        user.save!
      rescue ActiveRecord::RecordInvalid => exception
        puts user.errors.full_messages # Add this line to print error messages
        return ServiceContract.error('Error saving user.') unless user.valid?
      end
    
      ServiceContract.success(user)
    end

  def self.delete_user(user)
      return ServiceContract.error('User not found') if user.nil?
    
      if user.destroy
        ServiceContract.success(payload: user)
      else
        ServiceContract.error(user.errors.full_messages)
      end
    end
  end
    
end
