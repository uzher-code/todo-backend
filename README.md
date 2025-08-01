# TODO APP BACKEND

## REQUIRED TECHNOLOGIES
* Docker - for mysql db
* Node
* Npm

## Run App

### ENV setup
1- Copy the given 'env.example' file to .env

env files contains the database url. Since I am using docker and running the db locally, I can share these credentials without much security risk

### Install packages
```npm install```

### Start docker db
Creates the db if it does not exist - Docker required.
```npm run docker:mysql```

### Stop docker container
```npm run docker:stop```

### Sync prisma schema with db
```npm run prisma:setup```

### Start server
```npm run dev```
