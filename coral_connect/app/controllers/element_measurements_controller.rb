before_action :set_element_measurement, only: [:show, :update, :destroy]

# GET /element_measurements
def index
  @element_measurements = ElementMeasurement.where(user_id: params[:user_id])
  render json: @element_measurements
end

# GET /element_measurements/:id
def show
  render json: @element_measurement
end



# POST /element_measurements
def create
  @element_measurement = ElementMeasurement.new(element_measurement_params)
  @element_measurement.user_id = params[:user_id]

  if @element_measurement.save
    render json: @element_measurement, status: :created, location: @element_measurement
  else
    render json: @element_measurement.errors, status: :unprocessable_entity
  end
end

# PATCH/PUT /element_measurements/:id
def update
  if @element_measurement.update(element_measurement_params)
    render json: @element_measurement
  else
    render json: @element_measurement.errors, status: :unprocessable_entity
  end
end

# DELETE /element_measurements/:id
def destroy
  @element_measurement.destroy
  head :no_content
end

private

# Use callbacks to share common setup or constraints between actions.
def set_element_measurement
  @element_measurement = ElementMeasurement.find(params[:id])
end




# Only allow a list of trusted parameters through.
def element_measurement_params
  params.require(:element_measurement).permit(:name, :qt, :element_id, :user_id)
end
end