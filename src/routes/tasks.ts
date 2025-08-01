import { PrismaClient } from "../generated/prisma";
import { Router } from "express";

const router = Router();
const prisma = new PrismaClient();

// GET route to fetch all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: { createdAt: 'desc' }
    })
    res.json(tasks);

  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})


// POST route to create a new task
router.post('/', async (req, res) => {
  try {
    const { title, color } = req.body;
    if (!title || !color) {
      return res.status(400).json({ error: "Title and color are required" });
    }

    const newTask = await prisma.task.create({
      data: {
        title,
        color,
      }
    })
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

// PUT route to update a task
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, color, completed } = req.body;
  if (Number.isNaN(parseInt(id))) {
    return res.status(400).json({ error: "Invalid task ID" });
  }
  try {
    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: {
        title,
        color,
        completed
      }
    })
    res.json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

// DELETE route to delete a task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  if (Number.isNaN(parseInt(id))) {
    return res.status(400).json({ error: "Invalid task ID" });
  }
  try {
    await prisma.task.delete({ where: { id: parseInt(id) } })
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete the task' })
  }
})

export default router;