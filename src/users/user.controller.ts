import { Body, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UsersService } from "./user.service";
import { UserDTO } from "./user.dto";
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post('/create')
    async createUser(@Body() body: UserDTO):Promise<any> {
        
        return await this.userService.createUser(body);
    }

    @Get()
    async getUsers(@Res() res) {
        const users = await this.userService.getUsers();
        return res.status(HttpStatus.OK).json(users);
    }
    @Delete(':email')
    async deleteUser(@Res() res,@Param("email") email) {
        const userDeleted = await this.userService.deleteUser(email);
        if (!userDeleted) throw new NotFoundException('User does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'User Deleted Successfully',
            userDeleted
        });
    }

    @Put(':id')
    updateUser(@Body() body: UserDTO, @Param("id") id:string):void {
        this.userService.updateUser(id,body)  
    }

    @Put('/addUserProject/:email/:projectname')
     addUserProject(@Param("projectname") projectname:string, @Param("email") email:string):void {
        this.userService.addUserProject(projectname,email)  
    }

    @Put('/deleteUserProject/:email/:projectname')
     deleteUserProject(@Param("projectname") projectname:string, @Param("email") email:string):void {
        this.userService.deleteUserProject(projectname,email)  
    }
    
    
