import { ApiProperty } from '@nestjs/swagger';

export class SigninUserRequest {
  @ApiProperty({ example: 'Andrey' })
  username: string;

  @ApiProperty({ example: 'qwe123' })
  password: string;
}

export class SigninUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'Andrey',
        email: 'qwe123',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    email: string;
  };

  @ApiProperty({ example: 'Успешная авторизация' })
  message: string;
}
