## Run a cloned repo
If you clone this Github repo, use `docker-compose up` to run the app. 


## Run the image from Docker Hub
Pull the image from the [Docker repo](https://hub.docker.com/r/emilyhosoya/usersservice). Run it with postgres using the following steps:

1. Pull the image from Docker:
`docker pull emilyhosoya/usersservice`

2. Create a user-defined network to bridge the app and postgres:
`docker network create mynet`

3. Run postgres:
`docker run --net mynet --name database $(pwd)/datadir:/var/lib/postgresql/data -e POSTGRES_DB=users_microservice -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -d postgres:alpine`

4. Run the app:
`docker run --net mynet -ti -p 8080:8080 emilyhosoya/usersservice`
