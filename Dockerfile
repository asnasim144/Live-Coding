# Use a multi-stage build to keep the final image small
# Stage 1: Build
FROM node:alpine
# FROM node:alpine AS builder

WORKDIR /usr/src/app

# Copy only package.json and package-lock.json to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files and build the project
COPY . .
RUN npm run build

# # Stage 2: Production image
# FROM node:alpine

# WORKDIR /usr/src/app

# # Copy only the built output and necessary files
# COPY --from=builder /usr/src/app/build ./bu   ild
# COPY --from=builder /usr/src/app/package*.json ./

# # Install only production dependencies
# RUN npm install --only=production

# # Expose the port the app runs on
EXPOSE 3000

# # Command to run the application
CMD ["npm", "start"]
