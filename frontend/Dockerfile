# Use the official Node.js runtime as the base image
FROM node:18-alpine as dist
# Set the working directory in the container to /app
WORKDIR /app
# Copy the current directory contents into the container at /app
COPY package*.json ./
# Set the environment variable to the backend URL
ENV VITE_BACKEND_URL=backend
#backend 
#173.23.0.3
#host.docker.internal
# Install any needed packages specified in package.json
RUN npm install
# Copy the rest of the application code into the container at /app
COPY . .
# Build the application
RUN npm run build

# Use the official Nginx image as the base image
FROM nginx:1.21-alpine
# Copy the dist output to replace the default Nginx contents
COPY --from=dist /app/dist /usr/share/nginx/html
# Expose the port the app runs in
EXPOSE 80
# Serve the app
CMD ["nginx", "-g", "daemon off;"]