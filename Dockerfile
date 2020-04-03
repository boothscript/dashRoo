FROM node

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . /
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

CMD ["npm", "start"]