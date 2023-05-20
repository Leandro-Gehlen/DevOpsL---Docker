# **Learning Docker - Docker Course** <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="70" height="70"/> </a>
![](https://img.shields.io/github/license/leandro-gehlen/BL-clean-architecture-node-api)  

## Credits 

![](https://img.shields.io/badge/freecodecamp-27273D?style=for-the-badge&logo=freecodecamp&logoColor=white)

This course was developed by [**Sanjeev Thiyagarajan**](https://www.youtube.com/channel/UC2sYgV-NV6S5_-pqLGChoNQ).

Thank you to [**FreeCodeCamp.org**](https://www.freecodecamp.org/). You´ve been doing and amazing job and are a huge learning source for all devs worldwide. Thank you!

This is the link to the docker course. Click [**HERE**](https://www.youtube.com/watch?v=9zUHg7xjIqQ&t=5919s) to see it.

# Let´s Start! 🚀

## Step 1

 > npm init -y  // creates a new package.json file.
 >
 > npm install express
 > 
 > npm install dotenv
 >
 > create server.js file , setup an express server with a app.get route inside a src folder 
 > 
 > create a new script on package.json called start that runs "node ./src/server.js
 > npm run start 
 >

 <hr>


 ## Step 2

  - Go to docker website and search for node. You will be redirected to an oficial node image that can be pulled so your app can be based on.

  - To create a custom image we need to create a Dockerfile

  - Config the Dockerfile with the following commands:
  >
  > FROM node:20 </br>
  > WORKDIR /app </br>
  > </br>
  > COPY package.json .</br>
  > RUN npm install </br>
  > COPY . . </br>
  > </br>
  > EXPOSE 3000</br>
  > CMD ["node","./src/server.js"]</br>
  ></br>


