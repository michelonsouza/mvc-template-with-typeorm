import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import User from '@/app/models/User';

export class defaultUsers1602212514986 implements MigrationInterface {
  public async up(_: QueryRunner): Promise<void> {
    await getRepository(User, 'seed').save({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
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
