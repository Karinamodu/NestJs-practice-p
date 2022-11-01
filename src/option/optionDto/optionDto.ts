import { IsNotEmpty, IsString } from "class-validator";

export class optionDto {
    
    @IsNotEmpty()
    @IsString()
    text: string;

    @IsNotEmpty()
    // @IsBoolean()
    accurate: boolean;

    @IsNotEmpty()
    // @IsNumber()
    questionId: number;
}