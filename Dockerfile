# FROM base_image_name:tag/configuration(optional)
FROM  node:14

WORKDIR /app

COPY . /app

RUN npm install 

EXPOSE 80

CMD node index.js

