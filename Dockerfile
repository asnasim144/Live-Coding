# Stage 1: Base Node.js image
FROM node:alpine AS base

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Stage 2: Development stage
FROM base AS development

# Expose port 3000
EXPOSE 3000

# Start the app in development mode
CMD ["npm", "start"]

# Stage 3: Build stage
FROM base AS builder

# Build the React application for production
RUN npm run build

# Stage 4: Production stage with Nginx
FROM nginx:alpine AS production

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built application from the builder stage
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
