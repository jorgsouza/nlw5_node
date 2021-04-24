import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UserService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string) {
    //Check if the user exists
    const userExists = await this.usersRepository.findOne({
      email,
    });

    // if exist return user
    if (userExists) {
      return userExists;
    }
    const user = this.usersRepository.create({
      email,
    });

    // if not, save in database
    await this.usersRepository.save(user);

    return user;
  }
}

export { UserService };
