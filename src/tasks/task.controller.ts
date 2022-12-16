import { Body, Controller, Get, Post, Param, Put, Delete, Res, ParseIntPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from './task.dto';
import { Task } from './task.schema';

@Controller('tasks')
export class TaskController {

    constructor(private readonly TaskService:TaskService) {}


    @Get()
    getTasks():any  {
        return  this.TaskService.getTasks();

    }//getTasks

    @Get("/:id")
    async getTask(@Param('id') id:string) : Promise<Task|Object>{
        return await  this.TaskService.getTask(id);

    }//getUser


    @Post()
    async createTask(@Body() body: TaskDto):Promise<any> {
                
        await this.TaskService.createTask(body);
        return {messageCreated:`Task created`}
    }

    @Put("/:id")
    async updateTask(@Param('id') id: string, @Body() body: TaskDto):Promise<any> {
        
        await this.TaskService.updateTask(id,body);
        return {messageCreated:`Task updated`}

    }

    @Delete("/:id")
    async deleteUser(@Param('id') id: string):Promise<any> {
        await this.TaskService.deleteTask(id);
        return {messageCreated:`Task deleted`}
    }

}//class TaskController








