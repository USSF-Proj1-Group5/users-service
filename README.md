# Users Service

This microservice enables an administrator to add a new user to a PostgreSQL database, edit their user information, and delete a user. Capabilities under development include user login authentication and the ability to create and join a household with other users. 

View database schema at [Draw.io](https://drive.google.com/file/d/1Xp1a-6lcj4_X7ro1sFDO6jp3UxP_sGrm/view?usp=sharing).

## Run a cloned repo
If you clone this Github repo, use `docker-compose up` to run the app. 


## Run the image from Docker Hub
To run the app without cloning from Github, pull the image from the [Docker repo](https://hub.docker.com/r/emilyhosoya/usersservice). Run it with postgres using the following steps:

1. Pull the image from Docker:
`docker pull emilyhosoya/usersservice`

2. Create a user-defined network to bridge the app and postgres:
`docker network create mynet`

3. Run postgres:
`docker run --net mynet --name database -v usersservice:/var/lib/postgresql/data -e POSTGRES_DB=users_microservice -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -d postgres:alpine`

4. Run the app:
`docker run --net mynet -ti -p 8080:8080 emilyhosoya/usersservice`