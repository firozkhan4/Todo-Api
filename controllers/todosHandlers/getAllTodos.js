import Todo from "../../models/todoModel.js";
import User from "../../models/userModel.js";

const getAllTodos = async (req, res) => {
  try {
    const userId = await User.findOne({ email: "firozkhan@gmail.com" });
    const todos = await Todo.find({ createdBy: userId._id });
    if (!todos) {
      return res.status(404).json({ message: "No todos found" });
    }
    return res.status(200).json(todos);
  } catch (error) {
    console.log("Get All Todos Route error", error.message);
    return res.status(500).send("Internal server error");
  }
};

export default getAllTodos;
