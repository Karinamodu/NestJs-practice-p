import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { optionEntity } from "src/option/opdtionEntity/optionEntity";
import { questionEntity } from "src/question/questionEntity/qustionEntity";
import { quizEntity } from "src/quiz/quizEntity/quizEntity";
// import  dotenv  from 'dotenv';
import * as dotenv from 'dotenv'

dotenv.config()

export default class TypeOrmConfig {
    static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions{
        return {
            type: 'mysql',
            host: configService.get(process.env.DB_HOST),
            port: configService.get(process.env.DB_PORT),
            username: configService.get(process.env.DB_USERNAME),
            password: configService.get(process.env.DB_PASSWORD),
            database: configService.get(process.env.DB_NAME),
            entities: [quizEntity, questionEntity, optionEntity],
            synchronize: true,
            logging: true,
        };
    }
}

export const configurationAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],  

    useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),

    inject: [ConfigService]
}