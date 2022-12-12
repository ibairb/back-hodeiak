import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FeatureDto } from './features.dto';
import { Feature, FeatureDocument } from './features.schema';

@Injectable()
export class FeatureService {

    constructor(
        @InjectModel(Feature.name) private featureModel: Model<FeatureDocument>

    ) { }
    
    async getFeature(featurename: string):Promise<Feature|Object> {
        let feature= await this.featureModel.findOne({featurename:featurename});
        if(feature==null) return {error:"Feature doe not exit"};
        else  return feature;
          
    }//getFeature

    
   async getFeatures() {

        return await this.featureModel.find();
    }//getClients

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


