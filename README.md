## Contactzz
### Technologies used
- NodeJS
- ExpressJS
- Sequelize (for DB Migrations)
- Docker (for PostgreSQL container)

### Pre-requisites
- Install NodeJS
- Install Docker (or PostgreSQL on your machine)

### Setup PostgreSQL container
```bash
docker run --name contact-db -e POSTGRES_PASSWORD=contactdb -d postgres
```
To access PostgreSQL  
```bash
docker exec -it contact-db bash
psql -U postgres -W 
(enter password as contactsdb)
```
  
### How to run
Checkout the codebase 
```bash
git checkout https://github.com/hhimanshu/contactz
cd contactz
```
Install Dependencies
```bash
npm install
```

Run the DB migrations (local)
```bash
node_modules/.bin/sequelize db:create
node_modules/.bin/sequelize db:migrate
node_modules/.bin/sequelize db:seed:all
```

Run the DB migrations (Heroku)
```bash
heroku run sequelize db:migrate --app contactzz
heroku run sequelize db:seed:all --app contactzz
```

Run the application locally
```bash
npm run dev
```

Access the application at http://localhost:3000 