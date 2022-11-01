import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuestionService } from 'src/question/question.service';
import { OptionService } from './option.service';
import { optionDto } from './optionDto/optionDto';

@Controller('question/option')
export class OptionController {
    constructor(
        private readonly optionService: OptionService, private readonly questionService: QuestionService)
    {}

    @Post()
    @UsePipes(ValidationPipe)
    async createOptionToQuestion(@Body() optionDto: optionDto){
        const question = await this.questionService.findById(optionDto.questionId)
        const option = await this.optionService.createOption(optionDto, question)
        return {optionDto, question, option};
    }
}
