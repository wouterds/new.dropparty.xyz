FROM node:9-alpine
LABEL maintainer="Wouter De Schuyter <wouter.de.schuyter@gmail.com>"

# Copy required files
COPY ./node_modules /code/node_modules
COPY ./public /code/public
COPY ./server /code/server
COPY ./package.json /code/package.json
COPY ./.babelrc /code/.babelrc

# Change working directory
WORKDIR /code

# Expose port 3000
EXPOSE 3000

# Startup app
CMD ["npm", "run", "start:ssr"]
