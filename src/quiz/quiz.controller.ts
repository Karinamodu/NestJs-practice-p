import { Body, Controller, Delete, Get, Param, ParseFloatPipe, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { quizDto } from './quiz Dto/quizDto';
import { QuizService } from './quiz.service';
import { quizEntity } from './quizEntity/quizEntity';
 
@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService){}

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() quiz: quizDto){
        return this.quizService.createQuiz(quiz)
    }

    @Get()
    async getAll(): Promise<quizEntity[]>{
        return await this.quizService.getQuiz()
    }

    @Get('/:id')
    async findId (@Param('id', ParseIntPipe)id:number){
       return await this.quizService.findById(id)
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    async UpdateQuiz(@Param('id') id: number, @Body() user){
        return await this.quizService.updateById(id, user)
    }

    @Delete(':id')
    async deleteQuiz(@Param('id') id: number){
        return await this.quizService.deleteById(id)
    }
}