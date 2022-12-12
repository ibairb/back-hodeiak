import { Body, Controller, Get, Post, Param, Put, Delete, Res, ParseIntPipe } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientDto } from './client.dto';
import { Client } from './client.schema';

@Controller('clients')
export class ClientController {

    constructor(private readonly ClientService:ClientService) { }


    @Get()
    getClients():any  {
        return  this.ClientService.getClients();

    }//getclients

    @Get("/:clientname")
    async getClient(@Param('clientname') clientname:string, ) : Promise<Client|Object>{
        return await  this.ClientService.getClient(clientname);

    }//getClient


    @Post()
    async createClient(@Body() body: ClientDto):Promise<any> {
                
         await this.ClientService.createClient(body);

        return {messageCreated:`Usuario registrado`}
    }

    

    @Put(":id")
    updateClient(@Param('id', new ParseIntPipe({errorHttpStatusCode:406})) id: string, @Body() body: ClientDto): void {
        
        this.ClientService.updateClient(id,body);
    }

   
    @Delete(":id")
    deleteClient(@Param('id',new ParseIntPipe({errorHttpStatusCode:400})) id: string): void {
        this.ClientService.deleteClient(id);
       
    }

}//class ClientController








