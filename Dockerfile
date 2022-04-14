FROM  node 

WORKDIR /app

COPY . /app

RUN npm install 

EXPOSE 8000

CMD node index.js

