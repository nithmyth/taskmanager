const qGetAllTasks = `SELECT * 
FROM tasks;`;

const qGetATask = `SELECT * 
FROM tasks 
WHERE _id = ?`;

const qPostATask = `INSERT INTO tasks
VALUES (?, ?, ?)`;

const qUpdateATask = (isName, isCompleted) => {
  let values = '';
  if (isName) values += 'name = ?';
  if (isCompleted) {
    if (!values) values += ',';
    values += 'completed = ?';
  }
  return `UPDATE tasks 
SET ${values} 
WHERE _id = ?`;
};

const qDeleteATask = `DELETE FROM tasks 
WHERE _id = ?`;

module.exports = {
  qDeleteATask,
  qGetATask,
  qGetAllTasks,
  qPostATask,
  qUpdateATask,
};
