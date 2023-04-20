#place to implement filtering for element measurements 
module Api
  module V1

    class ElementMeasurementsController < Api::V1::ApplicationController
      before_action :set_element_measurement, only: [:show, :update, :destroy]

      # GET /element_measurements
      def index
        # If a user_id is provided in the URL, retrieve the element measurements for that user.
        if params[:user_id]
          @user = User.find(params[:user_id])
          @element_measurements = @user.element_measurements
        else
          # If no user_id is provided, retrieve all element measurements.
          @element_measurements = ElementMeasurement.all
        end
      
        render json: @element_measurements
      end

    # GET /element_measurements/:id
      def show
        render json: @element_measurement
      end

    # POST /element_measurements
      def create
        @element_measurement = ElementMeasurement.new(element_measurement_params)
      
        if @element_measurement.save
          response_json = @element_measurement.as_json
          
          response_json["url"] = api_v1_user_element_measurements_url(@element_measurement.user, @element_measurement)

          render json: response_json, status: :created
        else
          render json: @element_measurement.errors, status: :unprocessable_entity
        end
      end
      
    # PATCH/PUT /users/:user_id/element_measurements/:id
      def update
        @user = User.find(params[:user_id])
        @element_measurement = @user.element_measurements.find(params[:id])

        if @element_measurement.update(element_measurement_params)
          render json: @element_measurement
        else
          render json: @element_measurement.errors, status: :unprocessable_entity
        end
      end

    # DELETE /users/:user_id/element_measurements/:id
      def destroy
        @user = User.find(params[:user_id])
        @element_measurement = @user.element_measurements.find(params[:id])
        @element_measurement.destroy
        head :no_content
      end


      private

      # Use callbacks to share common setup or constraints between actions.
      def set_element_measurement
        @user = User.find(params[:user_id])
        @element_measurement = @user.element_measurements.find(params[:id])
      end




      # Only allow a list of trusted parameters through.
      private

      def element_measurement_params
        params.require(:element_measurement).permit(:qt, :reef_water_element_id, :user_id)
      end
              
    end
  end
end
