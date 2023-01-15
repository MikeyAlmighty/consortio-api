## Running

Dev: `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d`
Prod: `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build`

Bringing down:   `docker-compose -f docker-compose.yml -f docker-compose.ENV.yml down -v`
