import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { questionEntity } from 'src/question/questionEntity/qustionEntity';
import { Repository } from 'typeorm';
import { optionEntity } from './opdtionEntity/optionEntity';
import { optionDto } from './optionDto/optionDto';

@Injectable()
export class OptionService {
    constructor(@InjectRepository(optionEntity) private readonly optionRepository: Repository<optionEntity>){}

    async createOption(optionDto: optionDto, questionEntity: questionEntity): Promise<optionEntity>{
        const newOption = await this.optionRepository.save({
            text: optionDto.text,
            accurate: optionDto.accurate
        })

        questionEntity.options = [...questionEntity.options, newOption]
        await questionEntity.save();
        return newOption;
    }
}
