# React UI for a URL Shortener

# Description
This is a React UI that works with an API to generate a shortened URL.
This UI leverages my own [starter](https://github.com/rvansant2/node-app-ui) UI made with React, Material UI or CSS Framework, and more... There is a [Typescript](https://github.com/rvansant2/node-app-ui/tree/typescript) supported branch, but still needs the current baseline components to be ported over to that branch.

# Problem
The task is to build a front-end for a URL shortening web service. The should using the React framework, and incorporate whichever libraries, frameworks, tools, and development methodologies needed to complete a working front-end.

# Product requirements
The front end should be a single page app that allows the user to:

- Input any URL to get a shortened version of it
- See a list of previously shortened URLs
- Expire/delete any previous URLs

The user should optionally be able to provide a custom slug to be used as the path in the shortened URL.

## System Requirments
- Docker desktop or Mac, Windows or Linux - mine used MacOS and `Docker version 20.10.2, build 2291f61`
- Nodejs/npm - `lts` is defined in the docker container and no local install in needed outside of docker desktop but I have nodejs installed via `nvm` at `v14.6.0` and `npm` at `6.14.6`.
- All dependencies are defined in the `package.json`, which includes React and leverages `create-reaact-app` tool and directory structure. 

### Installation
- Pull or download a copy of the UI repo
- Fill in the environment variable details to the `.env.example`, for these are required to run the project.
- Run `docker-compose up`, optionally with `-d` if you want the service to run as a daemon or without if you wish to view logs in real time.
- Go to 

### Run project locally, no docker container
- Pull down repo of the project.
- Run `npm install` in the root directory of the project.
- Run `npm start`

### Run Tests
- Unfortunately, there is no container set up yet to run tests, but could easily be done - *roadmapped*
  - Also not extensive testing was done outside of manual testing, at this time.
- Tests use `Jest` and require all packages to be installed.
- Run `npm install` to pull down all packages and then run `npm run test`.

### Todo
- Hot reloading docker container, leveraging build
- Test docker container
- More `Jest` testing
- Styling fixes, mobile friendly
- Additional coding fixes...

