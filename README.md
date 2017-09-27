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
(enter password as contactdb)
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

### References
The following links were found useful when creating this application
https://github.com/babel/example-node-server
https://www.lookami.com/using-es6-es2015-in-a-node-js-express/
https://github.com/vmasto/express-babel
http://docs.sequelizejs.com/manual/tutorial/migrations.html
https://github.com/sequelize/sequelize
https://hub.docker.com/_/postgres/
https://github.com/sequelize/express-example
https://stackoverflow.com/questions/27687546/cant-connect-to-heroku-postgresql-database-from-local-node-app-with-sequelize
https://medium.com/@KerrySheldon/deploying-a-node-app-and-importing-a-postgres-database-to-heroku-8ad7bc9a2639
https://devcenter.heroku.com/changelog-items/438 (URL Construction scheme)
https://stackoverflow.com/questions/22633618/sequelize-migrations-in-heroku
http://andyfiedler.com/2016/02/getting-jetbrains-datagrip-to-work-with-heroku-postgres
 