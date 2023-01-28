const { default: mongoose } = require("mongoose");

const questionSchema = mongoose.Schema({
  category: { type: String, required: true },
  type: { type: String, required: true },
  difficulty: { type: String, required: true },
  question: { type: String, required: true },
  correct_answer: { type: String, required: true },
  incorrect_answers: [{ type: String, required: true }],
});

const Questionmodel = mongoose.model("questions", questionSchema);

module.exports = { Questionmodel };
