# Use the official Node.js 18.20.1 image as base
FROM node:18.20.1
# Set the working directory in the container
WORKDIR /app
# Copy the package.json file into the container at /backend
COPY package.json /app
# Install the dependencies
RUN npm install
# Copy the rest of the application code into the container at /backend
COPY . .
# Expose the port the app runs on
EXPOSE 5000
# Serve the app
CMD ["npm", "run", "start"]