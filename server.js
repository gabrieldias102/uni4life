const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
      },
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
