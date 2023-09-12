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
        email: 'example@example.com',
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

export class LogoutUserResponse {
  @ApiProperty({ example: 'Вы вышли из аккаунта' })
  message: string;
}

export class SigninCheckResponse {
  @ApiProperty({ example: '1' })
  userId: string;

  @ApiProperty({ example: 'Andrey' })
  username: string;

  @ApiProperty({ example: 'example@example.com' })
  email: string;
}

export class SignupResponse {
  @ApiProperty({ example: '1' })
  id: string;

  @ApiProperty({ example: 'Andrey' })
  username: string;

  @ApiProperty({ example: 'example@example.com' })
  email: string;

  @ApiProperty({
    example: '$2b$10$rCuoJcDkg.4..JlelLPwF.T0pHX9HVGI.pJDrW9GA5olNrNNdQqGe',
  })
  password: string;

  @ApiProperty({ example: '2023-09-10 21:26:54' })
  updatedAt: string;

  @ApiProperty({ example: '2023-09-10 21:26:53' })
  createdAt: string;
}
