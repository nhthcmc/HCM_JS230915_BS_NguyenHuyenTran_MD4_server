import express from "express";
const Router = express.Router();

import taskApi from './apis/task.api';
Router.use("/todo", taskApi)
export default Router;