import Todo from "../../models/todoModel.js";

const deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Todo.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.log("Get Todo By Id Route error", error.message);
    return res.status(500).send("Internal server error");
  }
};

export default deleteTodo;
