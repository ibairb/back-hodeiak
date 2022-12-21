import { Body, Controller, Get, Post, Param, Put, Delete, Res, ParseIntPipe } from '@nestjs/common';
import { FeatureService } from './feature.service';
import { FeatureDto } from './feature.dto';
import { Feature } from './feature.schema';

@Controller('features')
export class FeatureController {

    constructor(private readonly FeatureService:FeatureService) { }


    @Get()
    async getFeatures():Promise<FeatureDto|Object>  {
        return  this.FeatureService.getFeatures();

    }//getFeatures

    @Get("/:featurename")
    async getFeature(@Param('featurename') featurename:string ) : Promise<Feature|Object>{
        return await  this.FeatureService.getFeature(featurename);

    }//getFeature


    @Post()
    async createFeature(@Body() body: FeatureDto):Promise<any> {
                
         await this.FeatureService.createFeature(body);

        return {messageCreated:`FEATURE CREATED`}
    }

    

    @Put("/:id")
    async updateFeature(@Param('id')id: string, @Body() body: FeatureDto):Promise<any> {
        
        await this.FeatureService.updateFeature(id,body);
        return {messageCreated:`FEATURE UPDATED`}
    }

   
    @Delete("/:id")
    async deleteFeature(@Param('id') id: string): Promise<any>{
        await this.FeatureService.deleteFeature(id);
        return {messageCreated:`FEATURE DELETED`}
       
    }

}//class FeatureController








