import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import {MongooseModule} from "@nestjs/mongoose"
import {User,UserSchema} from './users/user.schema'
import * as dotenv from 'dotenv'
dotenv.config()

@Module({
  imports: [MongooseModule.forRoot(process.env.CONNECTION_STRING)
,MongooseModule.forFeature([{name:User.name,schema:UserSchema}])],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
