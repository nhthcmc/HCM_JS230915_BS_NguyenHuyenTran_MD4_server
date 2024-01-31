import { PrismaClient } from "@prisma/client";
import { Task } from "../common/interface";
const prisma = new PrismaClient()

export const taskModel = {
    findAll: async () => {
        let data = await prisma.tasks.findMany()
        return {
            status: true,
            message: "All tasks",
            data
        }
    },
    create: async (data: Task) => {
        let task = await prisma.tasks.create({
            data: {
                ...data
            }
        })
        return {
            status: true,
            message: "Created",
            data: task
        }
    },
    update: async (id: number, task: Task) => {
        let data = await prisma.tasks.update({
            where: {
                id
            },
            data: {
                ...task,
            }
        })
        return {
            status: true,
            message: "Updated",
            data
        }
    },
    delete: async (id: number) => {
        let data = await prisma.tasks.delete({
            where: {
                id
            }
        })
        return {
            status: true,
            message: "Deleted",
            data
        }
    }
}