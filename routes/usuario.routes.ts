import express from 'express';
import { usuarioController } from '../controllers/usuario.controller';

const router = express.Router();

router.post('/usuarios', usuarioController.criarUsuario);

export default router;
