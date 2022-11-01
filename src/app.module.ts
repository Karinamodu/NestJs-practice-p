import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configurationAsync } from 'config/configuration';
import { OptionModule } from './option/option.module';
import { QuestionModule } from './question/question.module';
import { QuizModule } from './quiz/quiz.module';

@Module({
  imports: [ConfigModule, TypeOrmModule.forRootAsync(configurationAsync),
  QuizModule, QuestionModule, OptionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
