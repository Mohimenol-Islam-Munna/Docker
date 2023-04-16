## Managing Images and Containers

##### 1.0. Run/Install base image or create container based on base or our created image:
        docker run base_image_name/image_name

##### 1.1. Run image or create container with port:
        docker run -p PORT:PORT image_name

##### 1.2. Run image or create container with volume:
        docker run -p PORT:PORT -v volume_name:/WORKDIR/path image_name

##### 1.3. Run image or create container with volume and bind mount:
        docker run -p PORT:PORT -v volume_name:/WORKDIR/path -v "abosulate_path_of_project_folder:/WORKDIR" image_name

##### 1.4. Build/Create image based on our docker script(Dockerfile):
###### With default name:
        docker build .

###### With custom name:
        docker build -t your_custom_name:your_custom_tag .

##### 1.5. All image list:
        docker images

##### 1.6. Remove image(When there is no stoped and running container under this image):
        docker rmi image_name

##### 1.7. Remove all image(Which are not used by containers):
        docker image prune

##### 1.8. Remove all image with tag(Which are not used by containers):
        docker image prune -a

##### 1.9. Inspect image:
        docker image inspect image_name 

##### ---***---


##### 2.1. Set Container Name:
        docker run -p PORT:PORT --name set_your_name image_name

##### 2.2. All Container List:
        docker ps -a

##### 2.3. Active Container List:
        docker ps

##### 2.4. Stop Container:
        docker stop container_name

##### 2.5. Run Stoped Container:
        docker start container_name
        docker start -a container_name

##### 2.6. Remove Container:
        docker rm container_name

##### 2.7. Remove Multiple Containers:
        docker rm container_name

##### 2.8. Remove Container Automatically:
###### Set this option when run image. Remove this container when this will stoped:
        docker run -p PORT:PORT -d --rm image_name

##### 2.9. Copy File From and To A Container:
###### Copy file/folder to container or form container:
###### Copy to running container:
        docker cp source_from container_name:/source_to

###### Copy from running container:
        docker cp container_name:/source_from source_to

###### ex. docker cp dummy/. hardcore_rubin:/test
