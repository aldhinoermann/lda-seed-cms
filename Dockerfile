# Use a compatible Node.js base image
FROM node:18.20.2

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package.json, pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies with pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Expose Payload CMS port
EXPOSE 3000

# Run Payload CMS
CMD ["pnpm", "run", "start"]

