# ip-geo-finder
Censys Dev Test: Find Lat/Long based on IP Address

This application is split into 2 parts: `ip-geo-api` is a Koa.js JSON API that talks to a GeoLite2 database to find latitude and longitude of given IPs, and `ip-geo-ui` is a React application (scaffolded with Create React App) that talks to aforementioned backend. 

The root of the project contains a `.env` file that can be used to change the ports that the API and the UI are served from. By default, these are ports `3000` and `4000` for the UI and API, respectively. The values in this file will supersede the values put in the `.env` files living in their individual project folders. 

## Running

`docker-compose up` will run both applications and allow you to access the front-end from `localhost:3000`. I was unfortunately unable to get development while the containers are running working due to my lack of knowledge around Docker volumes. Each individual piece can be run from their respective folders. `ip-geo-api` uses `node ./index.js` and `ip-geo-ui`

Note that if running the applications individually, they will have to have their own `.env` files. These files are provided with default values in the repository.