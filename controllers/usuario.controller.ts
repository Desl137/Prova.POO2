import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const usuarioController = {
  async criarUsuario(req: Request, res: Response) {
    const { nome, email } = req.body;

    try {
      const novoUsuario = await prisma.usuario.create({
        data: {
          nome,
          email,
        },
      });
      res.status(201).json(novoUsuario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  },
};
