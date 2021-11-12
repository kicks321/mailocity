import { getRepository } from 'typeorm';
import { Service, Inject } from 'typedi';
import { IUserSignUp } from '@/interfaces/IUser';
import { User } from '@/database/entity/user.entity';

@Service()
export default class AuthService {
  constructor(@Inject('logger') private logger) {}

  public async SignUp(userSignUpOptions: IUserSignUp): Promise<any> {
    try {
      console.log('We made it to the service!!!');

      const userRepo = getRepository(User);
      const user = userRepo.create({
        username: userSignUpOptions.username,
        password: userSignUpOptions.password
      });

      await userRepo.save(user).catch((err) => {
        console.log("Error: ", err);
      });
      console.log("New User Saved", user);

      return user;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
