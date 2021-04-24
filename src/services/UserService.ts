import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UserService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);
    //Check if the user exists
    const userExists = await usersRepository.findOne({
      email,
    });

    // if exist return user
    if (userExists) {
      return userExists;
    }
    const user = usersRepository.create({
      email,
    });

    // if not, save in database
    await usersRepository.save(user);

    return user;
  }
}

export { UserService };
