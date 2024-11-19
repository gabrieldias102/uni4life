const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany({
    take: 3,
  });

  res.json(users);
});

app.listen(3333, () => console.log("Server running on http://localhost:3333"));
