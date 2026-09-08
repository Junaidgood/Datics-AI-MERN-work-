import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        {id : 1 , name : "glass", age :"288"},
        {id : 2 , name : "cup", age :"55567"},
        {id : 3 , name : "tissue", age :"4465"},
    ]

    // for get all students 
    getAllStudents(){
        return this.students
    }

    //for get specific student

    getstudent(id:number){
        const student = this.students.find((SF)=>SF.id===id)
        if(!student) throw new NotFoundException('nahi mila student');
        return student;
    }


    //create a new student 
    createStudent(data:{name : string ; age : number}){
        const newStudent = {
            id:Date.now(),
            ...data,
        };
      this.students.push(newStudent);
      return newStudent;
    }

    
    //PUT
    updateStudent(id:number ,data:{name: string,age: number}){
    const index = this.students.findIndex((SF)=>SF.id===id);
    if(index === -1) throw new NotFoundException('update k liye student nhi mila');
    
    this.students[index]= {id ,...data};
    return this.students[index];

    }


    //Patch
    patchStudent(id : number , data : Partial<{name:string;age:number}>){
        const student = this.getstudent(id);
        Object.assign(student,data);
        return student;
    }
    

    //delete
    deleteStudent(id : number){
        const index = this.students.findIndex((SF)=>SF.id===id);
        if(index === -1) throw new NotFoundException('update k liye student nhi mila');
        const deleted = this.students.splice(index,1)
        return{message: 'student deleted',student:deleted[0]}
    }

}
