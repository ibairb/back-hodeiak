import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type EpicDocument = Epic & Document;

@Schema()
export class Epic {
    @Prop({required:true,unique:true})
    id:string
    @Prop({require:true})
    name:string
    @Prop()
    features:[]

}

export const EpicSchema = SchemaFactory.createForClass(Epic);

