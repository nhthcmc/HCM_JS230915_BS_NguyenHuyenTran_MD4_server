export interface updateTask {
    name: string;
    status: Status;
}
export type Status = 'completed' | 'uncompleted';

export interface createTask {
    name: string
}