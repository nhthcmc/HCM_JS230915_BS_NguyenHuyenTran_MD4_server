import { Request, Response } from "express";
import { taskModel } from "../models/task.model";

export const taskController = {
    findAll: async (req: Request, res: Response) => {
        try {
            const { status, message, data } = await taskModel.findAll();
            if (status) {
                return res.status(200).json({
                    message: "Found all",
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
            })
        }
    },
    create: async (req: Request, res: Response) => {
        try {
            const { status, message, data } = await taskModel.create(req.body);
            if (status) {
                return res.status(201).json({
                    message: "Created",
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
            // const taskId = parseInt(req.params.id)
            const { status, message, data } = await taskModel.update(Number(req.params.id), req.body);
            if (status) {
                return res.status(200).json({
                    message: "Updated",
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
            // const taskId = parseInt(req.params.id)
            const { status, message, data } = await taskModel.delete(Number(req.params.id));
            if (status) {
                return res.status(200).json({
                    message: "Deleted",
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