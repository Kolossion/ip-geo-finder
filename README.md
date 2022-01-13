# ip-geo-finder
Censys Dev Test: Find Lat/Long based on IP Address

This application is split into 2 parts: `ip-geo-api` is a Koa.js JSON API that talks to a GeoLite2 database to find latitude and longitude of given IPs, and `ip-geo-ui` is a React application (scaffolded with Create React App) that talks to aforementioned backend. These technologies were chosen mainly due to my familiarity with.

The root of the project contains a `.env` file that can be used to change the ports that the API and the UI are served from. By default, these are ports `3000` and `4000` for the UI and API, respectively. The values in this file will supersede the values put in the `.env` files living in their individual project folders. 

## Running

`docker-compose up` will run both applications and allow you to access the front-end from `localhost:3000`. I was unfortunately unable to get the containers to hot-reload when files are changed due to my lack of knowledge around Docker volumes. Each individual piece can be run from their respective folders. Both projects use `npm start` to run in development mode. Running things this way will allow for hot-reloading on both the API and the UI.

Note that if running the applications individually, they will have to have their own `.env` files. These files are provided with default values in the repository.

## Testing

Currently only the API has tests. They can be run using `npm test`. These tests check for the basic cases around the `/location/:ip` endpoint: Valid, Invalid formatting (basically anything not an IP address), and Not in DB.

For the front-end, the same test cases can be used, but must be run through the front-end itself (manual). The following values can be used to test:

Valid: `8.8.8.8`
Invalid: `Any string`
Not in DB: `192.168.1.1`