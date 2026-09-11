import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './student-schema';
import { Student1Service } from './student1.service';
import { Student1Controller } from './student1.controller';

@Module({
    imports:[
        MongooseModule.forFeature([{name: Student.name,schema:StudentSchema}])
    ],
    providers: [Student1Service],
    controllers: [Student1Controller]
})
export class Student1Module {}
