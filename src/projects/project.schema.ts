import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type projectDocument = Project & Document;
@Schema()
export class Project{  
    @Prop({require:true})
    title: string;

    @Prop({require:true})
    start: string;

    @Prop()
    status:string;

    @Prop()
    clientname:string;

    @Prop()
    epic:[]
  
}
export const ProjectSchema = SchemaFactory.createForClass(Project);