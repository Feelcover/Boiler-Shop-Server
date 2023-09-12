import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({example: 'example@example.com'})
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({example: 'qwe123'})
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({example: 'Andrey'})
  @IsNotEmpty()
  readonly username: string;
}
