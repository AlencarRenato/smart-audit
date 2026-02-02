import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rota de auditoria
app.get('/', (req, res) => {
  res.json({ 
    message: "Smart-Audit API está online!",
    status: "Pronto para analisar logs de segurança"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});