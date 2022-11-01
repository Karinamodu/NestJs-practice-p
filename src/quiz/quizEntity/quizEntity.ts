import { questionEntity } from "src/question/questionEntity/qustionEntity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('quiz')
export class quizEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title: string

    @Column()
    description: string

    @OneToMany(() => questionEntity, (question) => question.quiz)
    questions: questionEntity[];
}