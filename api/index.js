const cors = require("cors");
const express = require("express");
const { PrismaClient } = require("@prisma/client");

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

const port = process.env.PORT || 3333;
app.listen(port);
