import express from 'express'
const Router = express.Router();
import { taskController } from '../../../controllers/task.controller';

Router.get('/', taskController.findAll)
Router.post('/', taskController.create)
Router.put('/:id', taskController.update)
Router.delete('/:id', taskController.delete)
export default Router