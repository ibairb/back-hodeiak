import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FeatureDto } from './feature.dto';
import { Feature, FeatureDocument } from './feature.schema';

@Injectable()
export class FeatureService {

    constructor(
        @InjectModel(Feature.name) private featureModel: Model<FeatureDocument>

    ) { }

    async getFeatures() {

        return await this.featureModel.find();
    }//getFeatures
    
    async getFeature(id: string):Promise<Feature|Object> {
        let feature= await this.featureModel.findOne({id:id});
        if(feature==null) return {error:"Feature does not exit"};
        else  return feature;
          
    }//getFeature

    
   

   async createFeature(body: FeatureDto): Promise<any> {

        await this.featureModel.collection.insertOne(body);

        return { messageCreated: `FEATURE CREATED` }

    }//createFeature
    async updateFeature(id: string, body: any) {

        await this.featureModel.updateOne({ id }, { $set: body });

    }//updateFeature

    async deleteFeature(name: string) {
        await this.featureModel.deleteOne({ name });

    }//deleteFeature

}//class FeatureService


