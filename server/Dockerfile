FROM node:11

LABEL maintainer="Kuang-Ming Chen <kuangmingchen0702@gmail.com>"

WORKDIR ~/server

RUN npm install

COPY . .

EXPOSE 9001

CMD ["node", "server.js"]
