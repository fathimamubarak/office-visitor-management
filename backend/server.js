const visitorRoutes = require("./routes/visitorRoutes");
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/visitors", visitorRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Office Management Backend is running!"
    });
});

const PORT = 5000;

async function startServer() {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

startServer();