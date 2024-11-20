const express = require('express');
const router = express.Router();
const Tasks = require('../controllers/tasks');

router.route('/').get(Tasks.getAllTasks).post(Tasks.postATask);
router
  .route('/:id')
  .get(Tasks.getTaskById)
  .patch(Tasks.patchTaskById)
  .delete(Tasks.deleteTaskById);

module.exports = router;
