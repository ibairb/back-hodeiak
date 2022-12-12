import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type PbiDocument = Pbi & Document;
@Schema()
export class Pbi{
    @Prop()
    pbiname: string;
    @Prop()
    tasks: [];
 }
export const PbiSchema = SchemaFactory.createForClass(Pbi);