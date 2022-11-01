import { IsNotEmpty } from "class-validator";

export class quizDto{
    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    description:string
}