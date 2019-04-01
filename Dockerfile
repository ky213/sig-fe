FROM node
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY package*.json ./
COPY .nuxt server ./

# If you are building your code for production
# RUN npm install --only=production
# Bundle app source
EXPOSE 80

ENV NODE_ENV="production"

RUN yarn global add cross-env

CMD [ "cross-env","NODE_ENV=production","HOST=0.0.0.0","node", "server" ]

