If you clone this repo, use `docker-compose up` to run the app. 

Otherwise, pull the [Docker image](https://hub.docker.com/r/emilyhosoya/usersservice). Run it with postgres using the following steps:

1. Create a user-defined network to bridge the app and postgres:
`docker network create mynet`

2. Run postgres:
`docker run --net mynet --name database $(pwd)/datadir:/var/lib/postgresql/data -e POSTGRES_DB=users_microservice -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -d postgres:alpine`

3. Run the app:
`docker run --net mynet -ti -p 8080:8080 emilyhosoya/usersservice`
