import { Body, Controller, Get, Post, Param, Put, Delete, Res, ParseIntPipe } from '@nestjs/common';
import { FeatureService } from './feature.service';
import { FeatureDto } from './feature.dto';
import { Feature } from './feature.schema';

@Controller('features')
export class FeatureController {

    constructor(private readonly FeatureService:FeatureService) { }


    @Get()
    getFeatures():any  {
        return  this.FeatureService.getFeatures();

    }//getFeatures

    @Get("/:id")
    async getFeature(@Param('id') id:string ) : Promise<Feature|Object>{
        return await  this.FeatureService.getFeature(id);

    }//getFeature


    @Post()
    async createFeature(@Body() body: FeatureDto):Promise<any> {
                
         await this.FeatureService.createFeature(body);

        return {messageCreated:`Feature created`}
    }

    

    @Put(":id")
    updateFeature(@Param('id', new ParseIntPipe({errorHttpStatusCode:406})) id: string, @Body() body: FeatureDto): void {
        
        this.FeatureService.updateFeature(id,body);
    }

   
    @Delete(":id")
    deleteFeature(@Param('id',new ParseIntPipe({errorHttpStatusCode:400})) id: string): void {
        this.FeatureService.deleteFeature(id);
       
    }

}//class FeatureController








