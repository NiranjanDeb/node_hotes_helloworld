import express from "express";
import db from "./db.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000
import personRoutes from "./Routes/personRoutes.js";
import menuRoutes from "./Routes/menuRoutes.js";

app.use(bodyParser.json());
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my hotel... how can i help you?");
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
