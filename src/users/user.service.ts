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
    async getUser(email: string): Promise<User> {
        const user = await this.userModel.findOne({email}); 
        return user;
    }
    async createUser(body:UserDTO): Promise<any> {
        const user = await this.userModel.collection.insertOne(body);
        return {messageCreated:"Usuario creado!"};
    }
    async deleteUser(email: string): Promise<any> {
        const deleteUser = await this.userModel.deleteOne({email: email});
        return deleteUser;
    }
    async updateUser(email: string,body:any){
        await this.userModel.updateOne({email}, {$set:body});
        
    }   

    async addUserProject(projectname:string , email:string):Promise<any> {
           let user= await this.userModel.findOne({ email });
           //user.projects.push(projectname:projectname);
           console.log(user.projects, projectname)
           return { messageCreated: ` PROJECT ADDED TO USER` } 
    }//addUserProject
   
}//class UseService
