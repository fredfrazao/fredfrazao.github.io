

# DEPENDENCIES STAGE
# Install dependencies only when needed
FROM node:16.16.0 AS build
COPY  . .
RUN npm install


# PRODUCTION STAGE
# Copy the dependencies to the production image and run the application
FROM node:16.16.0 AS production
ENV NODE_ENV production
COPY --from=build . .

EXPOSE 3000


CMD ["npm", "start"]
