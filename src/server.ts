import express from "express";
import userRoutes from "./routes/bookRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Utilizando as rotas de usuários
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor está vivo e na porta ${PORT}`);
});
