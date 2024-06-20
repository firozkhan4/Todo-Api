import Todo from "../../models/todoModel.js";

const updateTodo = async (req, res) => {
  const id = req.params.id;
  const { title, description, completed } = req.body;
  try {
    const todo = await Todo.findOne({ _id: id });
    if (!todo) {
      return res.status(404).json({ message: "No todo found" });
    }

    if (title !== undefined) {
      todo.title = title;
    }
    if (description !== undefined) {
      todo.description = description;
    }
    if (completed !== undefined) {
      todo.completed = completed;
    }

    await todo.save();
    return res.status(200).json({ message: "Todo updated successfully", todo });
  } catch (error) {
    console.log("Update Todo Route error", error.message);
    return res.status(500).send("Internal server error");
  }
};

export default updateTodo;
