# Consortio API

> Partnership (**noun**) *consortium, societas, consociatio*

![Earth](docs/earth.jpg)

## :construction: Deprecating (Switch over to v2-java branch)

## Architecture

### Languages/Frameworks

- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/)

### Database

Open [Relationship](./relations.excalidraw) diagram on [Excalidraw](https://excalidraw.com/)

MongoDB (Shared database)
- Potentially look into database per-service

### Service structure

1. (root)
   - src
     - api
     - database
       - models
       - repository
     - services
       - xxx-service.ts
   - package.json
   - package-lock.json
   - .env

### Services

- [Brands](./brands/package.json)
- [Influencers](./influencers/package.json)
- [Products](./products/package.json)
- [Partnerships](./partnerships/package.json)

## Setup and Running

### Setup:

For each service (in root directory) `npm i`
Add `.env` file with following ENV vars:

```
PORT=XXX
MONGODB_URI=XXX
```

### Running
`cd` into each service:

Dev: `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d`
Prod: `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build`

Bringing down:   `docker-compose -f docker-compose.yml -f docker-compose.ENV.yml down`

### REST Collection

See [REST Collection](./REST Collection) (Using [restclient-mode](https://github.com/pashky/restclient.el) for emacs, to fire off requests).
