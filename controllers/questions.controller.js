const { Questionmodel } = require("../models/question.model");

const Quizdatavcontroller = async (req, res) => {
  const { category,difficulty } = req.body;
  const data = await Questionmodel.find({
    category: category,
    difficulty: difficulty,
  });
  
  res.send(data);
};
module.exports = { Quizdatavcontroller };
