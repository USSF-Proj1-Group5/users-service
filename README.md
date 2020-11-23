Use `docker-compose up` to run the app if you clone this repo.

Run the Docker Hub image with postgres:

* Create a user-defined network to bridge the app and postgres:
`docker network create mynet`

* Run postgres:
`docker run --net mynet --name mydb -v $(pwd)/datadir:/var/lib/postgresql/data -e POSTGRES_PASSWORD=postgres -d postgres:13.1-alpine`

* Run the app:>
`docker run --net mynet -ti -p 8080:8080 -v emilyhosoya/usersservice`
