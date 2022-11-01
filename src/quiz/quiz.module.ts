import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from 'src/question/question.controller';
import { QuestionService } from 'src/question/question.service';
import { questionEntity } from 'src/question/questionEntity/qustionEntity';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { quizEntity } from './quizEntity/quizEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([questionEntity, quizEntity])
  ],
  controllers: [QuizController, QuestionController],
  providers: [QuizService, QuestionService]
})
export class QuizModule {}
