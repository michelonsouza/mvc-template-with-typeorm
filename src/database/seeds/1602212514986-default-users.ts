import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '@/app/models/User';

export class defaultUsers1602212514986 implements MigrationInterface {
  public async up(_: QueryRunner): Promise<void> {
    const hashedPassword = await hash('123456', 8);

    await getRepository(User, 'seed').save({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: hashedPassword,
    });
  }

  public async down(_: QueryRunner): Promise<void> {
    const repository = getRepository(User, 'seed');
    const user = await repository.findOne({
      where: {
        email: 'johndoe@example.com',
      },
    });

    if (user) {
      await repository.delete(user.id);
    }
  }
}
