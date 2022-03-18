# Auth0 Boilerplate

A minimal boilerplate for Auth0 with PERN stack

## Setup

> in `web/.env`

Populate `.env` files with the following values.

```env
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
REACT_APP_SECRET=
REACT_APP_API=
REACT_APP_AUTH0_AUDIENCE=
```

> in `server/.env`

```env
API_AUTH0_DOMAIN=
API_AUTH0_CLIENT_ID=
API_SECRET=
API_AUTH0_AUDIENCE=
```

Get values from Auth0

![https://cdn2.auth0.com/docs/1.12828.0/media/articles/dashboard/client_settings.png](Reference Image)

## Web

Make sure to wrap the root with Auth0Provider. Make use of Login and Logout Button components in `/components`.

### Using Access Token

Navigate to [/web/src/components/AuthWrapper.js](/web/src/components/AuthWrapper.js) to see how Access Token is generated within `useEffect`.

Save the token to localStorage or global state and use it for all requests by passing it in Authorization header.

```js
    const response = await fetch(`yourapi.com/api/`, {
        headers: {
            Authorization: `Bearer ${token}`,
    },
```

## Server

### Using Middleware

Navigate to [/server/index.js](/server/index.js), `checkJWT` function can be injected as middleware in all requests to verify the passed Access Token in Authorization header.

## Running the Code

Ensure you have installed dependencies in both `/web` and `/server` folders with `npm install` and have set up `.env` files with the correct values as mentioned above.

```bash
cd server/
node index.js
```

```bash
cd web/
npm start
```