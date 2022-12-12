import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PbiDto } from './pbi.dto';
import { Pbi, PbiDocument } from './pbi.schema';

@Injectable()
export class PbiService {

    constructor(
        @InjectModel(Pbi.name) private PbiModel: Model<PbiDocument>

    ) { }
    async getPbi(pbiname: string):Promise<Pbi|Object> {
        let pbi= await this.PbiModel.findOne({pbiname:pbiname});
        if(pbi==null) return {error:"Pbi does not exit"};
        else  return pbi;
          
    }//getPbi
 
   async getPbis() {

        return await this.PbiModel.find();
    }//getPbis

   async createPbi(body: PbiDto): Promise<any> {

        await this.PbiModel.collection.insertOne(body);

        return { messageCreated: `Pbi CREATED` }

    }//createPbi
    async updatePbi(id: string, body: any) {

        await this.PbiModel.updateOne({ id }, { $set: body });

    }//updatePbi

    async deletePbi(name: string) {
        await this.PbiModel.deleteOne({ name });

    }//deletePbi

}//class PbiService


