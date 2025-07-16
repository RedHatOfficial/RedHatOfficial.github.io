FROM node:14-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including devDependencies for build)
RUN npm ci

# Install serve to serve static files
RUN npm install -g serve

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Serve the built application from dist directory
CMD ["serve", "-s", "dist", "-l", "3000"]


