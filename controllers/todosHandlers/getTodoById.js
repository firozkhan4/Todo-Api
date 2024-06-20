import Todo from "../../models/todoModel.js";

const getTodoById = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findOne({ _id: id });
    if (!todo) {
      return res.status(404).json({ message: "No todo found" });
    }
    return res.status(200).json(todo);
  } catch (error) {
    console.log("Get Todo By Id Route error", error.message);
    return res.status(500).send("Internal server error");
  }
};

export default getTodoById;
