require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./router/signuprouter");
const loginRoutes = require("./router/loginrouter");
const getRoutes = require("./router/getrouter")

const app = express();
connectDB();

app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

app.use ("/user", userRoutes)
app.use("/login", loginRoutes)
app.use("/getuser", getRoutes )

const PORT = process.env.PORT || 5151;
app.use((req,res) => res.send("routers not found"));

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});