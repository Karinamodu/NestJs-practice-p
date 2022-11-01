import { optionEntity } from "src/option/opdtionEntity/optionEntity";
import { quizEntity } from "src/quiz/quizEntity/quizEntity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('question')
export class questionEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    question: string;

    @ManyToOne( () => quizEntity, (quiz) => quiz.questions,
    {onDelete: 'CASCADE'})
    quiz: quizEntity;

    @OneToMany(() => optionEntity, (option) => option.question, 
    {onDelete: 'CASCADE'})
    options: optionEntity[];
}