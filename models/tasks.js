const Task = require('./Task');

const db = require('../db/mysql_connect');
const Q = require('../db/mysql_queries');

const generateUniqueId = () => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 10);
  return timestamp + random;
};

//get all tasks
const getAllTasks = async () => {
  try {
    // const res = await Task.find({});

    // MySQL
    let [res] = await db.execute(Q.qGetAllTasks);
    //converting Buffer sql boolean alternative to an actual boolean before sending it back to client
    res = res.map((task) => {
      const completed = Boolean(Buffer.from(task.completed).readInt8());
      return { ...task, completed };
    });
    console.log('Retrieved results from getAllTasks', res);
    return res;
  } catch (error) {
    console.log('Error in getAllTasks ', error);
    throw error;
  }
};

//post a task
const postATask = async (val) => {
  try {
    // MongoDB
    // const latestRec = await Task.findOne({}).limit(1).sort({ id: -1 });
    // const id = latestRec ? latestRec.id + 1 : 1;

    //Mongoose
    // const task = await Task.create({
    //   name: val.name,
    //   completed: val.completed,
    // });

    // MYSQL
    const [res] = await db.execute(Q.qPostATask, [
      generateUniqueId(),
      val.name,
      val.completed ? 1 : 0,
    ]);
    console.log('Inserted value!');
    return res;
  } catch (error) {
    console.log('Error in postATask ', error);
    throw error;
  }
};

//get a task by id
const getTaskById = async (id) => {
  try {
    // // const res = await Task.findOne({ id });
    // const res = await Task.findById(id);

    let [res] = await db.execute(Q.qGetATask, [id]);
    res = res.map((task) => {
      const completed = Boolean(Buffer.from(task.completed).readInt8());
      return { ...task, completed };
    });
    console.log('Retrieve results for id ', id, ' -> ', res);
    return res;
  } catch (error) {
    console.log('Error in getTaskById ', error);
    throw error;
  }
};

//update a task
const updateATask = async (_id, val) => {
  try {
    // // const res = await Task.updateOne({ _id }, { $set: val });
    // const res = await Task.findByIdAndUpdate(_id, val, {
    //   new: true, //returns back the updated doc
    //   runValidators: true, //this will take care of instances where name is empty since it is required and so you have to put in something
    // }); //without brackets because _id will default to the ObjectID and val is an object being passed to this
    const [res] = await db.execute(Q.qUpdateATask, val.name, val.completed);
    if (res) console.log(`Updated value ${val} for id ${_id}`);
    return res;
  } catch (error) {
    console.log('Error in updateATask ', error);
    throw error;
  }
};

//delete a task
const deleteATask = async (_id) => {
  try {
    // // const res = await Task.findOneAndDelete({ id });
    // const res = await Task.deleteOne({ _id });

    const [res] = await db.execute(Q.qDeleteATask, [_id]);
    console.log('Deleted id ', _id);
    return res;
  } catch (error) {
    console.log('Error in deleteATask ', error);
    throw error;
  }
};

module.exports = {
  getAllTasks,
  postATask,
  getTaskById,
  updateATask,
  deleteATask,
};
