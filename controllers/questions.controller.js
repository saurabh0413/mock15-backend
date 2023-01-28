const { Questionmodel } = require("../models/question.model");

const Quizdatavcontroller = async (req, res) => {
  const category = req.query.category;
  const difficulty = req.query.difficulty;
  const data = await Questionmodel.find({
    category,
    difficulty,
  });

  res.send(data);
};
module.exports = { Quizdatavcontroller };
