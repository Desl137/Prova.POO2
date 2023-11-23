import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const leilaoController = {
  async criarLeilao(req: Request, res: Response) {
    const { produto, preco, dataLimite, donoId } = req.body;

    try {
      const novoLeilao = await prisma.leilao.create({
        data: {
          produto,
          preco,
          dataLimite,
          donoId,
        },
      });
      res.status(201).json(novoLeilao);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar leilão' });
    }
  },
};
