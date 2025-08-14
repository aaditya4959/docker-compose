## Docker Installation
1. Run the postgres image with a volume mounte to it and make it part of a network.
   command : docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
2. Build the image 
    command : `docker build -t user-project .`
3. Start the image 
    command : `docker run -p 3000:3000 user-project`


## Docker Compose Installation
1. Install docker, docker-compose
2. Run `docker-compose up`s

