# ARCHIVED REPOSITORY

Well, Foton is dead now.
I managed to pass the tech challenge, but didn't accept any position back then.
I hope this might be useful for the ones seeking to learn. 

# Foton Fullstack Challenge

LIVE VERSION [HERE](https://marcodsl.github.io/foton-fullstack-challenge/#/).

Proposed design can be accessed from a mobile device or from your browser's DevTool.

Due to Heroku Free Plan limitations, it might take a while for the app to work properly after first access.

Admin account credentials were sent by email if desired to use ADD BOOK feature.

## Technologies

- TypeScript
- Yarn Workspaces
- Webpack
- Back-end:
  - Node.js
  - Express
  - TypeORM
  - TypeDI (IoC container)
  - MySQL
  - Heroku
- Front-end:
  - ReactJS
  - Styled Components
  - axios
  - react-router-dom
  - react-hook-form
  - react-toastify
  - GitHub Pages

## Running Locally

### Back-end

1. Navigate to back-end package folder (`packages/server`)
2. Install dependencies with `yarn install`
3. Create a `.env` file based on `.env.example`.
4. Execute all db migrations with `yarn typeorm migration:run`
5. Run `yarn start`

### Front-end

1. Navigate to front-end package folder (`packages/web`)
2. Install dependencies with `yarn install`
3. If needed, change API base url in `src/services/ApiClient.ts`
4. Run `yarn start`

## Features

- All **mandatory** features specified [here](https://github.com/FotonTech/fullstack-challenge)
- Simple responsiveness on large screens
- User accounts with sign up, sign in and log out
- Search feature works both for titles and authors
- RBAC on add books route

**ADD BOOK feature requires an Admin account whose credentials were sent by email. This decision was took to prevent malicious people from adding unwanted content to the application.**

## Development

According to Wakatime, the entire development took 37.5 hours.
![](https://i.imgur.com/wahVLfR.png)
