FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=3100
EXPOSE 3100 

CMD ["npm", "run", "start", "--", "--port=3100"]
