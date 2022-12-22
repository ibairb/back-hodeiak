import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type FeatureDocument = Feature & Document;
@Schema()
export class Feature{
    @Prop()
    status:string
    @Prop({unique:true})
    id: string;
    @Prop()
    featurename: string;
    @Prop()
    pbis: [];
    
 }
export const FeatureSchema = SchemaFactory.createForClass(Feature);