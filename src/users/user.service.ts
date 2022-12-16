import { Body, Delete, HttpStatus, Injectable, NotFoundException, Res } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from './user.schema';
import { UserDTO } from "./user.dto";


@Injectable()
export class UsersService {
    findById(id: number) {
        throw new Error('Method not implemented.');
    }
    constructor(@InjectModel(User.name) private readonly userModel:Model<UserDocument>){}

    async getUsers():Promise<User[]> {
        const users = await this.userModel.find();
        return users
    }

    async createUser(body:UserDTO): Promise<any> {
        const user = await this.userModel.collection.insertOne(body);
        return {messageCreated:"Usuario creado!"};
    }
    async deleteUser(email: string): Promise<any> {
        const deleteUser = await this.userModel.deleteOne({email: email});
        return deleteUser;
    }

    async updateUser(id: string,body:any){
        await this.userModel.updateOne({id}, {$set:body});
        
    }
    async getUser(id: number): Promise<User> {
        const user = await this.userModel.findOne({id}); 
        return user;
    }
}
