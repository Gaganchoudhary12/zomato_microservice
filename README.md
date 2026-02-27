# Zomato Microservices

## Architecture

```
Client
  ↓
API Gateway (4000)
  ├── User Service (4001)
  ├── Restaurant Service (4002)
  └── Order Service (4003)

MongoDB (27017)
```

## Port Configuration

- API Gateway: 4000
- User Service: 4001
- Restaurant Service: 4002
- Order Service: 4003
- MongoDB: 27017

## Running with Docker

```bash
docker compose up --build
```

## Running Locally

Start each service individually:

```bash
# Terminal 1 - User Service
cd user-service
npm run dev

# Terminal 2 - Restaurant Service
cd restaurant-service
npm run dev

# Terminal 3 - Order Service
cd order-service
npm run dev

# Terminal 4 - API Gateway
cd api-gateway
npm run dev
```

## API Endpoints

All requests go through API Gateway at `http://localhost:4000`

### Users
- POST `/users/register`
- POST `/users/login`

### Restaurants
- GET `/restaurants`
- POST `/restaurants`

### Orders
- POST `/orders`
- GET `/orders`
