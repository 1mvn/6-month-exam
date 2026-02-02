import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsNotEmpty()
  fullName?: string;

  @IsEmail()
  @IsNotEmpty()
  email?: string;

  @IsInt()
  @IsNotEmpty()
  age?: number;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
