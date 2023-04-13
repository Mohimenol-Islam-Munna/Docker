// Managing Images and Containers

0.0. Run/Install Base Image:
        docker run base_image_name

1.1. Build Image:
        // When run this command a new image will create based on base image and script.
        docker build .

1.2. Run Image:
        // When run this command a new container will create under this images.
        docker run image_name

1.3. Run Image:
        // When run this command a new container will create under this images.
        docker run -p PORT:PORT image_name

1.4. All Image List:
        docker images

1.5. Remove Image(When there is no stoped and running container under this image):
        docker rmi image_name

1.6. Remove All Image(Which are not used by containers):
        docker image prune

1.7. Inspect Image:
        docker image inspect image_name 

1.8. Set Image Name:
        docker build -t your_custom_name:your_custom_tag .

1.9. Remove All Image With Tag(Which are not used by containers):
        docker image prune -a

1.10. Run Image With Volume:
        docker run -p PORT:PORT -v volume_name:/WORKDIR/path image_name

1.11. Run Image With Volume and Bind Mount:
        docker run -p PORT:PORT -v volume_name:/WORKDIR/path -v "abosulate_path_of_project_folder:/WORKDIR" image_name


        ---***---

2.1. Stop Container:
        docker stop container_name

2.2. All Container List:
        docker ps -a

2.3. Active Container List:
        docker ps

2.4. Remove Container:
        docker rm container_name

2.5. Remove Multiple Containers:
        docker rm container_name

2.6. Remove Container Automatically:
        // Set this option when run image.
        // Remove this container when this will stoped
        docker run -p PORT:PORT -d --rm image_name

2.7. Copy File From and To A Container:
        // Copy file/folder to container or form container
        //copy to running container
        docker cp source_from container_name:/source_to

        //copy from running container
        docker cp container_name:/source_from source_to

        ex. docker cp dummy/. hardcore_rubin:/test

2.8. Set Container Name:
        docker run -p PORT:PORT --name set_your_name image_name