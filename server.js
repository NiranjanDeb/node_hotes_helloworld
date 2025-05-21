import express from "express";
import db from "./db.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import personRoutes from "./Routes/personRoutes.js";
import menuRoutes from "./Routes/menuRoutes.js";
import passport from "./auth.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

// middleware function---------- log function is used to log the request details 
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] request made at: ${req.method} method at: ${req.url}`);
  next();
};

app.use(logRequest);
app.use(bodyParser.json());

// 
app.use(passport.initialize()); // Initialize Passport for authentication
// Authenticate requests using the "local" strategy, without creating a session (i.e., no cookies or server-side login persistence).
const localAuthMiddleware = passport.authenticate('local', {session:false});


app.get("/", (req, res) => {
  res.send("Welcome to my hotel... how can i help you?");
});


// Importing the route files
app.use('/person',localAuthMiddleware, personRoutes);
app.use('/menu', menuRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
