import { Controller, Get, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from '../filters/http-exception/http-exception.filter';

@Controller('exception')


    @Controller('execption')
    @UseFilters(HttpExceptionFilter)
    export class ExceptionController{
    @Get('hello/:id')
    getHello(@Param('id',ParseIntPipe) id: number){
        return{Message :`your ID is: ${id}`}
    }
    }

