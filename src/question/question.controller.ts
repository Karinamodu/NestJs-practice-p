import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from 'src/quiz/quiz.service';
import { questionDto } from './question Dto/questionDto';
import { QuestionService } from './question.service';
import { questionEntity } from './questionEntity/qustionEntity';

@Controller('question')
export class QuestionController {
    constructor(private readonly questionService: QuestionService, private readonly quizService: QuizService){}

    @Post()
    @UsePipes(ValidationPipe)
    async createQuestion(@Body() questionDto: questionDto): Promise<questionEntity>{
        const quiz = await this.quizService.findById(questionDto.quizId)
        return await this.questionService.createQuestion(questionDto, quiz)
    }

    @Get()
    async getAll(get: any){
        return await this.questionService.getQuestion(get)
    }

    @Get('/:id')
    async findId (@Param('id', ParseIntPipe)id:number){
       return await this.questionService.findById(id)
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    async updateQuestion(@Param('id') id, @Body() body){
        return await this.questionService.updateQuestion(id, body)
    }

    @Delete(':id')
    async deleteQuestion(@Param('id') id, @Body() body){
        return await this.questionService.deleteQuestion(id)
    }
}
