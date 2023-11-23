import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const lanceController = {
  async criarLance(req: Request, res: Response) {
    const { compradorId, leilaoId, valor } = req.body;

    try {
      const novoLance = await prisma.lance.create({
        data: {
          compradorId,
          leilaoId,
          valor,
        },
      });
      res.status(201).json(novoLance);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar lance' });
    }
  },
};
