import { Body, Controller, Get, Post, Param, Put, Delete, Res, ParseIntPipe } from '@nestjs/common';
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
    async getProject(@Param('projectname') projectname:string, ) : Promise<Project|Object>{
        return await  this.ProjectService.getProject(projectname);

    }//getProject

    @Post("/create")
    async createProject(@Body() body: ProjectDto):Promise<any> {
                
         await this.ProjectService.createProject(body);

        return {messageCreated:`Project created`}
    }

    @Put(":id")
    updateProject(@Param('id', new ParseIntPipe({errorHttpStatusCode:406})) id: string, @Body() body: ProjectDto): void {
        
        this.ProjectService.updateProject(id,body);
    }
   
    @Delete(":id")
    deleteProject(@Param('id',new ParseIntPipe({errorHttpStatusCode:400})) id: string): void {
        this.ProjectService.deleteProject(id); 
    }

}//class ProjectController








