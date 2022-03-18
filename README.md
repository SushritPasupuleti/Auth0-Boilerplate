# Auth0 Boilerplate

A minimal boilerplate for Auth0 with PERN stack

## Setup

> in `web/.env`

```env
AUTH0_DOMAIN=
AUTH0_CLIENT_ID=
```

## Web

### Using Access Token

Navigate to [/web/src/components/AuthWrapper.js](/web/src/components/AuthWrapper.js) to see how Access Token is generated within `useEffect`.

Save the token to localStorage or global state and use it for all requests by passing it in Authorization header.

```js
    const response = await fetch(`yourapi.com/api/`, {
        headers: {
            Authorization: `Bearer ${token}`,
    },
```
