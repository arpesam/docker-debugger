FROM node:10.20.1

WORKDIR /usr/src/app

COPY ./ /usr/src/app

EXPOSE 4000
# EXPOSE 9229

# this is the command that will be runned when building the image
RUN npm i

# this is the command that will run when you type docker run
CMD ["/bin/bash"] 