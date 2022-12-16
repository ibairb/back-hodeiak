import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type projectDocument = Project & Document;
@Schema()
export class Project {
    @Prop({ unique: true, require: true })
    projectname: string;

    @Prop({ require: true })
    status: string;

    @Prop()
    clientname: string;

    @Prop()
    epics: []
   
}
// class Epics {
//     @Prop({ unique: true, require: true })
//     name: string;

//     @Prop()
//     features: [Features]
// }

// class Features {
//     @Prop({ unique: true, require: true })
//     name: string;

//     @Prop()
//     productBacklogItem: [ProductBacklogItem]
// }

// class ProductBacklogItem {
//     @Prop({ unique: true, require: true })
//     name: string;

//     @Prop()
//     task: [Task]
// }

// class Task {
//     @Prop({require: true })
//     title: string;

//     @Prop()
//     description: string;

//     @Prop()
//     user: string;

//     @Prop()
//     end: string;

//     @Prop()
//     color: string;
// }

export const ProjectSchema = SchemaFactory.createForClass(Project);