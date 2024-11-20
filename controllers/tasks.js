const model = require('../models/tasks');
const wrapper = require('../middleware/taskWrapper');
const { customError } = require('../errors/customError');

// const getAllTasks = async (req, res) => {
//   try {
//     return res.json({ tasks: await model.getAllTasks() });
//   } catch (error) {
//     return res.status(500).json({ error });
//   }
// };

const errorHandling404 = (dbRes, req, res, next) => {
  if (dbRes) {
    return res.json({ task: dbRes });
  } else {
    return next(customError(404, `No task with id ${req.params.id}`));
  }
};

const getAllTasks = wrapper(async (req, res) => {
  return res.status(200).json({ tasks: await model.getAllTasks() });
});

const postATask = wrapper(async (req, res) => {
  return res.json(await model.postATask(req.body));
});

const getTaskById = wrapper(async (req, res, next) => {
  const dbRes = await model.getTaskById(req.params.id);
  return errorHandling404(dbRes, req, res, next);
});

const patchTaskById = wrapper(async (req, res, next) => {
  const dbRes = await model.updateATask(req.params.id, req.body);
  return errorHandling404(dbRes, req, res, next);
});

const deleteTaskById = wrapper(async (req, res, next) => {
  const dbRes = await model.deleteATask(req.params.id);
  return errorHandling404(dbRes, req, res, next);
});

module.exports = {
  getAllTasks,
  postATask,
  getTaskById,
  patchTaskById,
  deleteTaskById,
};
