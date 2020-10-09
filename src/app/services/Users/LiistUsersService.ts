import { Repository, getRepository } from 'typeorm';

import User from '@/app/models/User';

export default class ListUsersService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  async execute(): Promise<User[]> {
    const users = await this.userRepository.find();

    return users;
  }
}
