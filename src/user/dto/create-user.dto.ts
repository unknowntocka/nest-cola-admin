import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'abcd' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: '1234' })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'tocka' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '1067075323@qq.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
