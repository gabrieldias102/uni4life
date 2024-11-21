const cors = require("cors");
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/api/users", async (req, res) => {
  const users = await prisma.user.findMany({
    take: 3,
  });

  res.json(users);
});

app.get("/api/posts", async (req, res) => {
  const posts = await prisma.post.findMany({
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
  res.json(posts);
});

const port = process.env.PORT || 3333;
app.listen(port);
