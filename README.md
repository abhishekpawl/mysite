# My Personal Portfolio Website

You can visit [Here](https://abhishekpawl.vercel.app/)

**UPDATE:** [go](https://github.com/abhishekpawl/mysite#docker-compose-utility)

# Docker utility

## To run the dockerized container of this app:

After cloning the repo:

* In the root directory:
    1. To build the image from the Dockerfile, run
        ```
        docker image build --tag <IMAGE-NAME>:<tagname> .
        ```
    1. To run a docker container of the image and to:
        1. keep STDIN open even if not attached
        1. provide a tty
        1. run the container in detached mode
        1. [UPDATE: **After uncommenting line 7 in Dockerfile**] publish the exported ports (since it has been provided for in the Dockerfile), run
            ```
            docker container run -i -t -d -P <IMAGE-NAME>:<tagname>
            ```
    1. To retrieve the ID of the docker container, run
        ```
        docker container ls
        ```
        ![docker container ls](readmeAssets/portR.png)
        The exposed port can be retrieved from here and the app will be hosted on the mentioned port.
        ![site](readmeAssets/site.png)
    1. To get into the container and the filesystem in interactive mode, run
        ```
        docker exec -it <CONTAINER-ID> sh
        ```
        or
        ```
        docker container attach <CONTAINER-ID>
        ```
        ![docker exec --it 'CONTAINER-ID' sh](readmeAssets/exec.png)
    1. To stop and remove the container at once, run
        ```
        docker container rm -f <CONTAINER ID>
        ```

# Docker Compose utility

## A step ahead:
* In the root directory:
    1. Now, with the ```docker-compose.yml``` file available can, run
    [__Port to be exposed can be altered in the docker-compose.yml file__]
        ```
        docker-compose up -d
        ```
    1. The information can be retrieved by the command
        ```
        docker-compose ps
        ```
    1. To undo all changes, run
        ```
        docker-compose down
        ```