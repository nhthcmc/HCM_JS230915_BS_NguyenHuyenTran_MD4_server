import express from "express";
const Router = express.Router();

import taskApi from './v1/task.api';
Router.use("/todo", taskApi)
export default Router;