const express = require("express");
const prisma = require("./config/prisma");

const userRoutes = require("./routes/user.routes")

const app = express();

app.use(express.json());

app.use("/", userRoutes);


app.get("/health", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.status(200).json({
      status: "healthy",
      app: "running",
      database: "connected",
    });
  } catch (error) {
    res.status(500).json({
      status: "unhealthy",
      app: "running",
      database: "disconnected",
      error: error.message,
    });
  }
});

module.exports = app;
