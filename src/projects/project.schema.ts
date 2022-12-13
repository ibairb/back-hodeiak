import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type projectDocument = Project & Document;
@Schema()
export class Project{  
    @Prop({unique:true, require:true})
    projectname: string;

    @Prop({require:true})
    status:string;

    @Prop()
    clientname:string;

    @Prop()
    epics:[]

    @Prop()
    users:[]
}
export const ProjectSchema = SchemaFactory.createForClass(Project);