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

    def self.update_user(user, params)
      if params[:password].present?
        user.password = params[:password]
        user.password_confirmation = params[:password_confirmation]
      end
      
      user.assign_attributes(
        first_name: params[:first_name] || user.first_name,
        last_name: params[:last_name] || user.last_name,
        email: params[:email] || user.email,
        phone: params[:phone] || user.phone
      )
      
      begin
        user.save!
      rescue ActiveRecord::RecordInvalid => exception
        return ServiceContract.error('Error updating user.') unless user.valid?
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
