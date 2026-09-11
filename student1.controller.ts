import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Student1Service } from './student1.service';
import { ParamsTokenFactory } from '@nestjs/core/internal';
import { Student } from './student-schema';

@Controller('student1')
export class Student1Controller {
    constructor(private readonly studentService : Student1Service){}

    @Post()
    async addStudent(@Body() data: Partial<Student>){
        return this.studentService.createStudent(data)
    }
    
    @Get()
    async getStudents(){
        return this.studentService.getAllStudents();
    }

    @Get(':id')
    async getStudent(@Param('id') id : string){
        return this.studentService.getStudentById(id);
    }

    @Put(':id')

    async updateStudent(
        @Param('id') id : string,
        @Body() data: Partial<Student>,
    ){
        return this.studentService.updateStudent(id,data);
    }

    @Patch(':id')

    async patchStudent(
        @Param('id') id : string,
        @Body() data: Partial<Student>,
    ){
        return this.studentService.patchStudent(id,data);
    }

    @Delete(':id')
    async deleteStudent(@Param('id') id :string){
        return this.studentService.deleteStudent(id)
    }
    


}
