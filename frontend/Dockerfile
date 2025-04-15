# Build stage
FROM node:18 as build
WORKDIR /app
COPY . .

# force production env
ENV NODE_ENV=production
ENV VITE_API_BASE_URL=http://backend:5001/api
ENV VITE_SOCKET_URL=http://backend:5001

RUN npm install
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]