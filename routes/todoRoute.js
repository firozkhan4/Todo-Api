import express from "express";
import getAllTodos from "../controllers/todosHandlers/getAllTodos.js";
import createTodo from "../controllers/todosHandlers/createTodo.js";
import getTodoById from "../controllers/todosHandlers/getTodoById.js";
import updateTodo from "../controllers/todosHandlers/updateTodo.js";
import deleteTodo from "../controllers/todosHandlers/deleteTodo.js";

const routes = express.Router();

routes.get("/", getAllTodos);
routes.post("/", createTodo);
routes.get("/:id", getTodoById);
routes.patch("/:id", updateTodo);
routes.delete("/:id", deleteTodo);

export default routes;
