import { Body, Controller, Get, Post, Param, Put, Delete, Res, ParseIntPipe } from '@nestjs/common';
import { PbiService } from './pbi.service';
import { PbiDto } from './pbi.dto';
import { Pbi } from './pbi.schema';

@Controller('pbis')
export class PbiController {

    constructor(private readonly PbiService:PbiService) { }


    @Get()
    getPbis():any  {
        return  this.PbiService.getPbis();

    }//getPbis

    @Get("/:id")
    async getPbi(@Param('id') id:string ) : Promise<Pbi|Object>{
        return await  this.PbiService.getPbi(id);

    }//getPbi


    @Post()
    async createPbi(@Body() body: PbiDto):Promise<any> {
                
         await this.PbiService.createPbi(body);

        return {messageCreated:`Pbi CREATED`}
    }

    

    @Put("/:id")
    async updatePbi(@Param('id') id: string, @Body() body: PbiDto):Promise<any> {
        console.log(body);
        
        await this.PbiService.updatePbi(id,body);
        return {messageCreated:`Pbi UPDATED`};
    }

   
    @Delete("/:id")
    async deletePbi(@Param('id') id: string): Promise<any> {
       await  this.PbiService.deletePbi(id);
       return {messageCreated:`Pbi DELETED`};
       
       
    }

}//class PbiController








