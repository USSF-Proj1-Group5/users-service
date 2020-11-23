Use `docker-compose up` to run the app if you clone this repo.

Otherwise, run the [Docker image](https://hub.docker.com/r/emilyhosoya/usersservice) with postgres:

1. Create a user-defined network to bridge the app and postgres:
`docker network create mynet`

2. Run postgres:
`docker run --net mynet --name database -v $(pwd)/datadir:/var/lib/postgresql/data -e POSTGRES_DB=users_microservice -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -d postgres:alpine`

3. Run the app:
`docker run --net mynet -ti -p 8080:8080 emilyhosoya/usersservice`
