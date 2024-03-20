FROM node:latest as builder
WORKDIR /app
ARG VITE_URL
ENV VITE_URL=$VITE_URL

COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]