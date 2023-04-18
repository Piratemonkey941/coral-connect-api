# Choose the Ruby base image
FROM ruby:3.2.0

# Install necessary dependencies
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

# Create a directory for the application
RUN mkdir /myapp
WORKDIR /myapp

# Copy Gemfile and Gemfile.lock
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock

# Install gems
RUN bundle install

# Copy the application code into the container
COPY . /myapp

# Expose the port the app will run on
EXPOSE 3000

# Define the command to start the application
CMD ["rails", "server", "-b", "0.0.0.0"]
