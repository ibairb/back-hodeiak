import { Body, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { EpicService } from "./epic.service";
import { EpicDTO } from "./epic.dto";
@Controller('epics')
export class EpicController {
    constructor(private epicService: EpicService) {}

    @Get()
    async getEpics():Promise<EpicDTO|Object> {
       return this.epicService.getEpics();
        

    }//getEpics
    @Get("/:id")
    async getEpic(@Param('id') id:string):Promise<EpicDTO|Object> {
         return await this.epicService.getEpic(id);   
       
    } 
    @Post()
    async createEpic(@Body() body: EpicDTO):Promise<any> {
        
        await this.epicService.createEpic(body);
        return {messageCreated:`EPIC CREATED`}
    }
   
    @Delete('/:id')
    async deleteEpic(@Res() res,@Param("id") id):Promise<any> {
        await this.epicService.deleteEpic(id);
        return {messageCreated:`EPIC DELETED`}
    }   
   
    @Put('/:id')
    async updateUser(@Body() body: EpicDTO, @Param("id") id:string):Promise<any> {
        await this.epicService.updateEpic(id,body) ;
        return {messageCreated:`EPIC UPDATED`} 
    }

    @Get(':id')
    async getEpic(@Res() res, @Param('id') id) {
        const epic = await this.epicService.getEpic(id);
        if (!epic) throw new NotFoundException('Epic does not exist!');
        return res.status(HttpStatus.OK).json(epic);
    } 
}

