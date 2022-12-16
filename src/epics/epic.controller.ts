import { Body, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { EpicService } from "./epic.service";
import { EpicDTO } from "./epic.dto";
@Controller('epics')
export class EpicController {
    constructor(private epicService: EpicService) {}

    @Get()
    async getEpics(@Res() res) {
        const epics = await this.epicService.getEpics();
        return res.status(HttpStatus.OK).json(epics);

    }
    @Get(':id')
    async getEpic(@Res() res, @Param('id') id) {
        const epic = await this.epicService.getEpic(id);
        if (!epic) throw new NotFoundException('Epic does not exist!');
        return res.status(HttpStatus.OK).json(epic);
    } 


    @Post('/create')
    async createEpic(@Body() body: EpicDTO):Promise<any> {
        
        return await this.epicService.createEpic(body);
    }

   
   
    @Delete('/delete/:id')
    async deleteEpic(@Res() res,@Param("id") id) {
        const epicDeleted = await this.epicService.deleteEpic(id);
        if (!epicDeleted) throw new NotFoundException('Epic does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Epic Deleted Successfully',
            epicDeleted
        });
    }

    @Put('/update/:id')
    updateUser(@Body() body: EpicDTO, @Param("id") id:string):void {
        this.epicService.updateEpic(id,body)  
    }

   
}

