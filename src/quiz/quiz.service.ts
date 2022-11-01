import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { identity } from 'rxjs';
import { questionEntity } from 'src/question/questionEntity/qustionEntity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { quizEntity } from './quizEntity/quizEntity';

@Injectable()
export class QuizService {
    constructor(@InjectRepository(quizEntity) private readonly quizRepository: Repository<quizEntity>){}

    async createQuiz(createQuiz: any){
        return this.quizRepository.save(createQuiz);
    }

    async getQuiz(): Promise<quizEntity[]>{
        return await this.quizRepository
        .createQueryBuilder('qu')
        .leftJoinAndSelect('qu.questions', 'qt')
        .getMany()
    }

    async findById(id: number): Promise<quizEntity>{
        // const findUser = id;
        // if(findUser){
        //     return await this.quizRepository.findOneBy({id});
        // }else{
        //     throw new HttpException('This User Does Not Exist ', 404);
        // }

        return await this.quizRepository.findOne({
            where: {id},
            relations: ['questions']
        });
    }

    async updateById(id: number, user): Promise<UpdateResult>{
        return await this.quizRepository.update(id, user)
    }

    async deleteById(id: number): Promise<DeleteResult>{
        return await this.quizRepository.delete(id)
    }
}
