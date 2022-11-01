import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { optionEntity } from 'src/option/opdtionEntity/optionEntity';
import { OptionController } from 'src/option/option.controller';
import { OptionService } from 'src/option/option.service';
import { QuizController } from 'src/quiz/quiz.controller';
import { QuizService } from 'src/quiz/quiz.service';
import { quizEntity } from 'src/quiz/quizEntity/quizEntity';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { questionEntity } from './questionEntity/qustionEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([questionEntity, quizEntity, optionEntity])
  ],
  controllers: [QuestionController, QuizController, OptionController],
  providers: [QuestionService, QuizService, OptionService]
})
export class QuestionModule {}
