import { Request, Response } from "express";
import { taskModel } from "../models/task.model";

export const taskController = {
    findAll: async (res: Response) => {
        try {
            const { status, message, data } = await taskModel.findAll();
            if (status) {
                return res.status(200).json({
                    message,
                    data
                });
            } else {
                throw {
                    message: "error"
                };
            }
        } catch (err) {
            console.log('err', err);
            return res.status(500).json({
                message: (err as Error).message || "Internal Server Error",
                data: null
            })
        }
    },
    create: async (req: Request, res: Response) => {
        try {
            const { status, message, data } = await taskModel.create(req.body);
            if (status) {
                return res.status(201).json({
                    message,
                    data
                })
            } else {
                throw {
                    message: "Error!"
                }
            }
        } catch (err) {
            console.log('err', err);
            return res.status(500).json({
                message: (err as Error).message || "Internal Server Error",
            })
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const taskId = parseInt(req.params.id)
            const { status, message, data } = await taskModel.update(taskId, req.body);
            if (status) {
                return res.status(200).json({
                    message,
                    data
                })
            } else {
                throw {
                    message: "Task not found!"
                }
            }
        } catch (err) {
            console.log('err', err);
            return res.status(500).json({
                message: (err as Error).message || "Internal Server Error",
            })
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const taskId = parseInt(req.params.id)
            const { status, message, data } = await taskModel.delete(taskId);
            if (status) {
                return res.status(200).json({
                    message,
                    data
                })
            } else {
                throw {
                    message: "Task not found!"
                }
            }
        } catch (err) {
            return res.status(500).json({
                message: (err as Error).message || "Internal Server Error",
            })
        }
    }
}