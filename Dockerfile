 
# Step 1: Use Node.js to build the Angular app
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Angular app in production mode
RUN npm run build --prod

# Step 2: Use Nginx to serve the Angular app
FROM nginx:alpine

# Copy the Angular app build output to Nginx's default HTML folder
COPY --from=build /app/dist/<your-angular-app-name> /usr/share/nginx/html

# Expose the port Nginx will use
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
