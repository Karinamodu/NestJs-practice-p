import { Module } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionController } from './option.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from 'src/question/question.controller';
import { QuestionService } from 'src/question/question.service';
import { questionEntity } from 'src/question/questionEntity/qustionEntity';
import { QuizController } from 'src/quiz/quiz.controller';
import { QuizService } from 'src/quiz/quiz.service';
import { quizEntity } from 'src/quiz/quizEntity/quizEntity';
import { optionEntity } from './opdtionEntity/optionEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([questionEntity, quizEntity, optionEntity])
  ],
  controllers: [QuestionController, QuizController, OptionController],
  providers: [QuestionService, QuizService, OptionService]
})
export class OptionModule {}
