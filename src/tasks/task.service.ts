import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskDto } from './task.dto';
import { Task, taskDocument } from './task.schema';

@Injectable()
export class TaskService {

    constructor(
        @InjectModel(Task.name) private taskModel: Model<taskDocument>

    ) { }
    
    async getTask(taskname: string):Promise<Task|Object> {
        let task= await this.taskModel.findOne({taskname:taskname});
        if(task==null) return {error:"Task does not exit"} 
        else  return task;
    }//getTask
    async getTasks() {

        return await this.taskModel.find();
    }//getTasks
    
    async createTask(body: TaskDto): Promise<any> {
        await this.taskModel.collection.insertOne(body);
        return { messageCreated: `Task created` }

    }//createTask

    async updateTask(id: string, body: any) {

        await this.taskModel.updateOne({ id }, { $set: body });

    }//updateTask

    async deleteTask(id: string) {
        await this.taskModel.deleteOne({ id });
    }//deleteTask
}//class TaskService


