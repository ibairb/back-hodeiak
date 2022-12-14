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

    @Get("/:taskname")
    async getTask(@Param('taskname') taskname:string) : Promise<Task|Object>{
        return await  this.TaskService.getTask(taskname);

    }//getUser


    @Post()
    async createTask(@Body() body: TaskDto):Promise<any> {
                
         await this.TaskService.createTask(body);

        return {messageCreated:`Task created`}
    }

    @Put(":id")
    updateTask(@Param('id', new ParseIntPipe({errorHttpStatusCode:406})) id: string, @Body() body: TaskDto): void {
        
        this.TaskService.updateTask(id,body);
    }

    @Delete()
    async deleteUser(@Body() body: TaskDto):Promise<any> {
        await this.TaskService.deleteTask(body);
    }

}//class TaskController