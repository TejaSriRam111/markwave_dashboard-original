# Multi-stage Dockerfile
# 1) Build React app using Node
# 2) Serve static build with Nginx

FROM node:18-alpine AS build

WORKDIR /app

# Install dependencies (use npm ci for reproducible installs)
COPY package*.json ./
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build

########################################
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config (listens on 8080 for Cloud Run)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port used by Cloud Run
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
