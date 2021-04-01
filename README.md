# Movie Station

Movie Station, allows users to create an account where they can then browse, search, and save their preferred movies.

- As a user, I can create an account on the Movie Station app using my email address and password.
- As a user, I can log in and out of the Movie Station app.
- As a user, I can reset my password, so that I can still have access to my saved movies.
- As a user, I can update my password, so that I can change it to something that I can remember more easily after I reset my password.
- As a user, I can save movies.
- As a user, I am able to delete saved movies in home page of the Movie Station app
- As a user, I can view all my saved movies in the home page.

## Setup

- `git clone` this repo
- `cd` into it.
- `yarn install`
- `cd client && yarn install`
- `cp .env.sample .env`
- `cd ..`
- `cp .env.sample .env`
- `populate variables within root .env file with your own data`

## Available build commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

Open [http://localhost:3000](http://localhost:3000) to view your local React app in the browser. The page will reload if you make edits.

### Movie Station Open Endpoints

| HTTP Verb | Path            | Description                                           |
| --------- | --------------- | ----------------------------------------------------- |
| POST      | `/api`          | CREATE a new user                                     |
| POST      | `/api/login`    | CREATE a new session for a logged in user             |
| GET       | `/api/password` | GET a new password using password reset functionality |

### Movie Station Secure User Endpoints (only available to logged in users)

| HTTP Verb | Path                    | Description                                                |
| --------- | ----------------------- | ---------------------------------------------------------- |
| GET       | `/api/users/me`         | VIEW information about currently logged in user            |
| PATCH     | `/api/users/me`         | UPDATE information about currently logged in user          |
| POST      | `/api/users/logout`     | END a user's session on the device they're currently using |
| POST      | `/api/users/lougoutall` | END a user's session on all devices                        |

### Movie Station Secure User (Movie) Endpoints (only available to a logged in user)

| HTTP Verb | Path              | Description                               |
| --------- | ----------------- | ----------------------------------------- | --- |
| POST      | `/api/movies`     | ADD a new movie                           |
| GET       | `/api/movies/all` | VIEW all of a user's saved movies         |
| GET       | `/api/movies/:id` | VIEW a specific movie on a user's account |     |
| DELETE    | `/api/movies/:id` | DELETE a user's movie                     |

## To deploy

NOTE: Heroku specifically runs `npm start`, so don't remove that from your package.json file.

- `heroku create your-app-name`
- `heroku config:set MONGODB_URL=<insertYourAtlasDbUri> SENDGRID_API_KEY=<yoursendgridapikey> FROM_EMAIL=<youremail> JWT_SECRET=<yoursecret>`
- `git push heroku master`

## License

[MIT](https://choosealicense.com/licenses/mit/)
