import { Body, Controller,HttpStatus, Get, Post, Param, Put, Delete, Res, ParseIntPipe } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectDto } from './project.dto';
import { Project } from './project.schema';

@Controller('projects')
export class ProjectController {
    constructor(private readonly ProjectService:ProjectService) { }

    @Get()
    getProjects():any  {
        return  this.ProjectService.getProjects();

    }//getProjects

    @Get("/:projectname")
    async getProject(@Param('projectname') projectname:string ) : Promise<Project|Object>{
        return await  this.ProjectService.getProject(projectname);

    }//getProject

    @Post()
    async createProject(@Body() body: ProjectDto):Promise<any> {
                
        await this.ProjectService.createProject(body);

        return {messageCreated:`Project created`}
    }

    @Put(":projectname")
    updateProject(@Body() body: ProjectDto, @Param('projectname') projectname) : any {
        return this.ProjectService.updateProject(projectname,body);
    }

    // @Put("addUser/:projectname/:username")
    // addUserProject(@Param('projectname') projectname, @Param('username') username) : any {
    //     return this.ProjectService.addUserProject(projectname,username);
    // }
    // @Put("deleteUser/:projectname/:username")
    // deleteUserProject(@Param('projectname') projectname, @Param('username') username) : any {
    //     return this.ProjectService.deleteUserProject(projectname,username);
   //}   
    @Delete(':projectname')
    async deleteProject(@Param("projectname") projectname) {
        const projectDeleted = await this.ProjectService.deleteProject(projectname);  
    }
}//class ProjectController








