const { Questionmodel } = require("../models/question.model");

const Quizdatavcontroller = async (req, res) => {
  const { category, difficulty } = req.query;
  const data = await Questionmodel.find({
    category,
    difficulty,
  });

  res.send(data);
};
module.exports = { Quizdatavcontroller };
