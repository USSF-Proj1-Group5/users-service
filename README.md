Use `docker-compose up` to run the app if you clone this repo.

The below instructions run the pulled image from Docker Hub. It doesn't work yet...
Create a user-defined network to bridge the app and postgres:
`docker network create mynet`

Run postgres:
`docker run --net mynet --name mydb -v $(pwd)/datadir:/var/lib/postgresql/data -e POSTGRES_PASSWORD=postgres -d postgres:13.1-alpine`

Run the app:
<!-- using -v doesn't work right now... need to learn about volumes!: -->
<!-- `docker run --net mynet -ti -p 8080:8080 -v emilyhosoya/usersservice` --> 
`docker run --net mynet -ti -p 8080:8080 emilyhosoya/usersservice`
