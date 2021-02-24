const { Router } = require('express');
const TaskService = require('../services/TasksService');
const { StatusCodes } = require('http-status-codes');
const TaskValidations = require('../middlewares/TaskValidations');



const router = Router();

router.get('/', async (_req, res) => {
  const tasks = await TaskService.getAll();

  res.status(StatusCodes.OK).json(tasks);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const task = await TaskService.findById(id);

  if (!task) return res.status(StatusCodes.NOT_FOUND).json({message: 'Task not found'});

  res.status(StatusCodes.OK).json(task);
});

router.post('/', TaskValidations, async (req, res) => {
  const { name } = req.body;

  const task = await TaskService.create(name);
  
  res.status(StatusCodes.OK).json(task);
});

router.put('/:id', TaskValidations, async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  await TaskService.update(id, name);

  res.status(StatusCodes.NO_CONTENT).end();
});

router.delete('/:id', async(req, res) => {
  const { id } = req.params;

  await TaskService.remove(id);

  res.status(StatusCodes.NO_CONTENT).end();
});

module.exports = router;