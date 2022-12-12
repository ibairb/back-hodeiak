import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectDto } from './project.dto';
import { Project, projectDocument } from './project.schema';

@Injectable()
export class ProjectService {

    constructor(
        @InjectModel(Project.name) private projectModel: Model<projectDocument>

    ) { }
    
    async getProject(projectname: string):Promise<Project|Object> {
        let project= await this.projectModel.findOne({projectname:projectname});
        if(project==null) return {error:"Project does not exist"};
        else  return project;
          
    }//getProject

    
   async getProjects() {

        return await this.projectModel.find();
    }//getProjects

   async createProject(body: ProjectDto): Promise<any> {

        await this.projectModel.collection.insertOne(body);

        return { messageCreated: `PROJECT CREATED` }

    }//createProject
    async updateProject(id: string, body: any) {

        await this.projectModel.updateOne({ id }, { $set: body });

    }//updateProject

    async deleteProject(name: string) {
        await this.projectModel.deleteOne({ name });

    }//deleteProject
    async removeUser(name: string, username:string) {
      let proyecto=this.projectModel.findOne({ name });
      //proyecto.users

    }//deleteProject




}//class ProjectService


