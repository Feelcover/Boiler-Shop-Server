import { IsNotEmpty } from 'class-validator';

export class CreateuserDto {
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
