import { Body, Delete, HttpStatus, Injectable, NotFoundException, Res } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { Epic, EpicDocument } from './epic.schema';
import { EpicDTO } from "./epic.dto";

@Injectable()
export class EpicService {
    constructor(@InjectModel(Epic.name) private readonly epicModel:Model<EpicDocument>){}
    findById(id: number) {
        throw new Error('Method not implemented.');
    }

    async getEpics():Promise<Epic[]> {
        const users = await this.epicModel.find();
        return users
    }
    async getEpic(id: number): Promise<Epic> {
        const epic = await this.epicModel.findOne({id}); 
        return epic;
    }

    async createEpic(body:EpicDTO): Promise<any> {
        const epic= await this.epicModel.collection.insertOne(body);
        return {messageCreated:"Epic creado!"};
    }
    async deleteEpic(id: number): Promise<any> {
        const deleteEpic = await this.epicModel.deleteOne({id: id});
        return deleteEpic;
    }

    async updateEpic(id: string,body:any){
        await this.epicModel.updateOne({id}, {$set:body});
        
    }
    
}//class EpicService

