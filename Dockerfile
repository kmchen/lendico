FROM node:11

LABEL maintainer="Kuang-Ming Chen <kuangmingchen0702@gmail.com>"

WORKDIR ~/lendico

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9002

CMD ["npm", "start"]
