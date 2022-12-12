import { Body, Controller, Get, Post, Param, Put, Delete, Res, ParseIntPipe } from '@nestjs/common';
import { PbiService } from './pbis.service';
import { PbiDto } from './pbis.dto';
import { Pbi } from './pbis.schema';

@Controller('pbis')
export class PbiController {

    constructor(private readonly PbiService:PbiService) { }


    @Get()
    getPbis():any  {
        return  this.PbiService.getPbis();

    }//getPbis

    @Get("/:pbiname")
    async getPbi(@Param('pbiname') pbiname:string, ) : Promise<Pbi|Object>{
        return await  this.PbiService.getPbi(pbiname);

    }//getPbi


    @Post()
    async createPbi(@Body() body: PbiDto):Promise<any> {
                
         await this.PbiService.createPbi(body);

        return {messageCreated:`Pbi created`}
    }

    

    @Put(":id")
    updatePbi(@Param('id', new ParseIntPipe({errorHttpStatusCode:406})) id: string, @Body() body: PbiDto): void {
        
        this.PbiService.updatePbi(id,body);
    }

   
    @Delete(":id")
    deletePbi(@Param('id',new ParseIntPipe({errorHttpStatusCode:400})) id: string): void {
        this.PbiService.deletePbi(id);
       
    }

}//class PbiController








