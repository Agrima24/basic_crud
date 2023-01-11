const crudModelSchema = require("../model/crudModelSchema");

const getUser = async (req, res) => {
  try {
    console.log("Get Request");
    const crud = await crudModelSchema.find();
    res.json(crud);
  } catch (err) {
    res.send("Error" + err);
  }
};

const createUser = async (req, res) => {
  console.log(req.body);

  const cruddata = new crudModelSchema({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const addRes = await cruddata.save();
    res.json({
      status: "successful",
      data: addRes,
    });
  } catch (err) {
    res.send({
      status: "failure",
      message: "Error-Occure" + err.message,
    });
  }
};

const updateUser = async (req, res) => {
  console.log(req.params.id);
  try {
    const crud = await crudModelSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.json({ crud });
  } catch (err) {
    res.send("Error" + err);
  }
};

const deleteUser = async (req, res) => {
  await crudModelSchema.findByIdAndDelete(req.params.id);
  try {
    res.status(204).send().json({
      status: "Success",
      data: {},
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
