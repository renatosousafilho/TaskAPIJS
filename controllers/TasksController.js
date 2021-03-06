const { Router } = require('express');
const TaskService = require('../services/TasksService');
const { validateTask } = require('../middlewares/TaskMiddlewares');
const { StatusCodes } = require('http-status-codes');

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

// router.post('/', async (req, res) => {
// const { name, user } = req.body;

// const { code, message, task } = await TaskService.create(name, user);

// if (message) return res.status(code).json({message})

// res.status(StatusCodes.OK).json(task);
// });

router.post('/', validateTask, async (req, res) => {
  /*  #swagger.parameters['name'] = {
                 in: 'body',
                 type: "string",
                 description: "Name"
  } */
  /*  #swagger.parameters['user'] = {
                 in: 'body',
                 type: "string",
                 description: "user"
  } */
  const { name, user } = req.body;

  const task = await TaskService.create(name, user);

  res.status(StatusCodes.OK).json(task);
});

router.put('/:id', validateTask, async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  /*  #swagger.parameters['name'] = {
                 in: 'body',
                 type: "string",
                 description: "Name"
  } */
  /*  #swagger.parameters['user'] = {
                 in: 'body',
                 type: "string",
                 description: "user"
  } */

  await TaskService.update(id, name);
  
  res.status(StatusCodes.NO_CONTENT).end();
});

router.delete('/:id', async(req, res) => {
  const { id } = req.params;

  await TaskService.remove(id);

  res.status(StatusCodes.NO_CONTENT).end();
});

module.exports = router;