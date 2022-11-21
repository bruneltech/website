FROM node:18 AS builder

WORKDIR /app

COPY . .
RUN chmod +x entrypoint.sh
RUN yarn install

FROM nginx:latest
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY --from=builder /app/public .

FROM node:18
RUN npm install --global gatsby-cli && gatsby telemetry --disable && mkdir /save
COPY --from=builder /app/node_modules /save/node_modules

ENTRYPOINT [ "./entrypoint.sh" ]