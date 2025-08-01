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

### Start docker db and server - first time
Recommended for first time. This should also start the server
```npm run start:fresh```

### Start existing docker db
```npm run docker:start```

### Start server
```npm run dev```
