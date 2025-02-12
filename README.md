# RSSchool NodeJS websocket task template
> Static http server and base task packages. 
> By default WebSocket client tries to connect to the 8080 port.

## Installation
1. Clone/download repo
2. `npm install`

## Usage
**Development**

`npm run start`

* App served @ `http://localhost:8181` with nodemon

**Production**

`npm run start:prod`

* App served @ `http://localhost:8181` without nodemon

---

**All commands**

Command | Description
--- | ---
`npm run start` | App served @ `http://localhost:8181` with nodemon
`npm run start:prod` | App served @ `http://localhost:8181` without nodemon

**Note**: replace `npm` with `yarn` in `package.json` if you use yarn.
