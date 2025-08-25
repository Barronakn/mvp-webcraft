# Use an official Node.js image (Node.js 18 recommended for Next.js 13+)
FROM node:18.19.0

# Set the working directory inside the container
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm@9.12.3

# Copy only the package.json and pnpm-lock.yaml to leverage Docker caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
# Use --frozen-lockfile to ensure the lockfile is respected
RUN pnpm install --no-frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN pnpm run build

# Expose the port Next.js will run on (default: 3000)
EXPOSE 3000

# Start the Next.js application
CMD ["pnpm", "start"]