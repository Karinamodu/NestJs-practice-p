import { questionEntity } from "src/question/questionEntity/qustionEntity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('option')
export class optionEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column({
        type: 'boolean'
    })
    accurate: boolean;

    @ManyToOne(() => questionEntity, (question) => question.options,
    {onDelete: 'CASCADE'})
    question: questionEntity;
}