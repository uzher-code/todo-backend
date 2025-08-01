import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      orderby: { createdAt: 'desc' }
    })
    res.json(tasks);

  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

export default router;