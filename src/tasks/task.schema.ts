import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type taskDocument = Task & Document;
@Schema()
export class Task{
   
    @Prop({require:true})
    taskname: string;
    @Prop()
    description:string;
    }
export const TaskSchema = SchemaFactory.createForClass(Task);