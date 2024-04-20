# Use node.js as the base image
FROM node:18-alpine
# Set the working directory in the container
WORKDIR /app
# Copy the package.json file into the container at /frontend
COPY package.json /app
COPY package-lock.json /app
# Install the dependencies
RUN npm install
# Copy the rest of the application code into the container at /frontend
COPY . .
# Expose the port the app runs on
EXPOSE 8000
# Serve the app
CMD ["npm", "run", "serve"]