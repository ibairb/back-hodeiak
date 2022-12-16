import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type PbiDocument = Pbi & Document;
@Schema()
export class Pbi{
    @Prop({required:true,unique:true})
    id:string
    @Prop()
    pbiname: string;
    @Prop()
    tasks: [];
 }
export const PbiSchema = SchemaFactory.createForClass(Pbi);