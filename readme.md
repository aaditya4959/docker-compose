## Docker Installation
1. Create Netwrok
    `docker network create user_project`
1. Run the postgres image with a volume mounte to it and make it part of a network.
   command : `docker run --network user_project --name postgres  -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`
2. Build the image 
    command : `docker build --network=host -t user-project .`
3. Start the image 
    command : `docker run -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgres:5432/postgres --network user_project  -p 3000:3000 user-project`
 

## Docker Compose Installation
1. Install docker, docker-compose
2. Run `docker-compose up`s

