const { Router } = require('express');
const TaskService = require('../services/TasksService');

const router = Router();

router.get('/', async (_req, res) => {
  const tasks = await TaskService.getAll();

  res.status(200).json(tasks)
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const task = await TaskService.findById(id);

  if (!task) return res.status(404).json({message: 'Task not found'})

  res.status(200).json(task);
});

router.post('/', async (req, res) => {
  const { name } = req.body;

  const task = await TaskService.create(name);
  
  res.status(200).json(task)
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, deadline } = req.body;

  await TaskService.update(id, name, deadline);

  res.status(204).end();
});

router.delete('/:id', async(req, res) => {
  const { id } = req.params;

  await TaskService.remove(id);

  res.status(204).end();
});

module.exports = router;