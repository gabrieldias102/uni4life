const cors = require("cors");
const express = require("express");
const path = require("path"); // Import necessário para trabalhar com caminhos
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

// Configuração básica
app.use(cors());
app.use(express.json());

// Servir os arquivos estáticos do React
app.use(express.static(path.join(__dirname, "build")));

// Endpoints da API
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany({
    take: 3,
  });

  res.json(users);
});

// Redirecionar qualquer outra rota para o React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Iniciar o servidor
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
