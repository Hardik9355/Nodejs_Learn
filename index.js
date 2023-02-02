require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./router/signup")
const app = express();
connectDB();

app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));
app.use ("/user", userRoutes)


const PORT = process.env.PORT || 5151;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});