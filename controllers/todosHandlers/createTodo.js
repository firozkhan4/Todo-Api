import Todo from "../../models/todoModel.js";
import User from "../../models/userModel.js";

const createTodo = async (req, res) => {
  const { title, description } = req.body;
  try {
    const userId = await User.findOne({ email: "firozkhan@gmail.com" });
    console.log(userId);
    const newTodo = new Todo({
      title,
      description,
      createdBy: userId._id,
    });
    await newTodo.save();
    res
      .status(201)
      .json({ message: "Todo created successfully", todo: newTodo });
  } catch (error) {
    console.log("Create Todo route error", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default createTodo;
