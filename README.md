# Consortio API

> Partnership (**noun**) *consortium, societas, consociatio*

![Earth](docs/earth.jpg)

## :construction: Work in Progress

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
- Influencers (Coming soon)
- Products (Coming soon)

## Setup and Running

### Setup:

For each service (in root directory) `npm i`
Add `.env` file with following ENV vars:

```
PORT=XXX
MONGODB_URI=XXX
```

### Running:

```js
cd gateway/ && npm run dev
cd influencers/ && npm run dev
cd brands/ && npm run dev
cd products/ && npm run dev
```
