# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies (none for this example, but needed for npm start)
RUN npm install

# Expose the port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
