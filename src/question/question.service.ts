import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { quizEntity } from 'src/quiz/quizEntity/quizEntity';
import { Repository, UpdateResult } from 'typeorm';
import { questionDto } from './question Dto/questionDto';
import { questionEntity } from './questionEntity/qustionEntity';

@Injectable()
export class QuestionService {
    constructor(@InjectRepository(questionEntity)private readonly questionRepository: Repository<questionEntity>){}

    async createQuestion(questionDto: questionDto, quizEntity: quizEntity): Promise<questionEntity>{

        const newQuestion = await this.questionRepository.save({question: questionDto.question})

        quizEntity.questions = [...quizEntity.questions, newQuestion]
         await quizEntity.save();
        return newQuestion;
    }

    async getQuestion(getQuestion: any){
        return await this.questionRepository
        .createQueryBuilder('qt')
        .leftJoinAndSelect('qt.options', 'o')
        .getManyAndCount()
    }

    async findById(id: number): Promise<questionEntity>{
        return await this.questionRepository.findOne({
            where: {id},
            relations: ['quiz', 'options']
        });
    }


    async updateQuestion(id: number, question): Promise<UpdateResult>{
        return await this.questionRepository.update(id, question)
    }

    async deleteQuestion(id: number){
        return await this.questionRepository.delete(id)
    }


}
