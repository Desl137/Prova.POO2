import express from 'express';
import usuarioRoutes from '../routes/usuario.routes';
import leilaoRoutes from '../routes/leilao.routes';
import lanceRoutes from '../routes/lance.routes';

const app = express();

app.use(express.json());

// Adicione rotas para cada entidade
app.use('/usuarios', usuarioRoutes);
app.use('/leiloes', leilaoRoutes);
app.use('/lances', lanceRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
