import { IsString, IsNumber, IsDateString, ValidateNested, IsOptional, IsDefined, ValidateIf, IsMongoId } from 'class-validator';
import { Type } from 'class-transformer';
import { LocationDto } from './location.dto';
import { UserInfoDto } from '../../users/dto/user-info.dto'; 
export class RegisterAdDto {
    @IsString()
    readonly title!: string;

    @IsString()
    readonly description!: string;

    readonly photos?: string[];

    @IsString()
    readonly typeId!: string;

    @IsMongoId()
    readonly categoryId!: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => LocationDto)
    readonly location!: LocationDto;

    @IsDefined()
    @ValidateNested()
    @Type(() => UserInfoDto)
    readonly user!: UserInfoDto;

    @IsOptional()
    @IsDateString()
    readonly lostOrFoundAt?: Date;

    @IsOptional()
    @IsString()
    readonly secretQuestion?: string;

    // validate answer if req has secret_question
    @ValidateIf(regAd => regAd.secret_question)
    @IsString()
    readonly secretAnswer?: string;
}