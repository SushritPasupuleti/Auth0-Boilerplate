require('dotenv').config()
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const app = express();

const port = process.env.API_PORT || 5000;
const appPort = process.env.SERVER_PORT || 3000;
const appOrigin = `http://localhost:${appPort}`;

if (
    !process.env.API_AUTH0_DOMAIN ||
    !process.env.API_AUTH0_AUDIENCE ||
    process.env.API_AUTH0_AUDIENCE === "YOUR_API_IDENTIFIER"
) {
    console.log(
        "Exiting: Please make sure that auth_config.json is in place and populated with valid domain and audience values"
    );

    process.exit();
}

app.use(helmet());
app.use(cors({ origin: appOrigin }));

/// Middleware to check if JWT passed in Authorization header is valid
const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.API_AUTH0_DOMAIN}/.well-known/jwks.json`,
    }),

    audience: process.env.API_AUTH0_AUDIENCE,
    issuer: `https://${process.env.API_AUTH0_DOMAIN}/`,
    algorithms: ["RS256"],
});

app.get("/api/route1", checkJwt, (req, res) => {
    /// run API related code here
    /// fetch user based on passed user credentials like id or email and infer RBAC
    /// conditionally enable acess
    res.send({
        msg: "Your access token was successfully validated!",
    });
});

app.post("/auth/login", checkJwt, (req, res) => {
    /// create new user if not already registered
    /// return user session info if already registered
});

app.listen(port, () => console.log(`API Server listening on port ${port}`));
