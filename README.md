# Consortio API

> Partnership (**noun**) 
> `consortium, societas, consociatio`

[Relationships](./relations.excalidraw)


## Services

#### Brands
- [Brands](./brands/package.json)
#### Influencers
- Coming soon
#### Products
- Coming soon

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
