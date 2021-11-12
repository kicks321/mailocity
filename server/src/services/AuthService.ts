import { getRepository } from 'typeorm';
import { Service, Inject } from 'typedi';
import { IUser, IUserSignUp } from '@/interfaces/IUser';
import { User } from '@/database/entity/user.entity';
import jwt from 'jsonwebtoken';
import config from '@/config';

@Service()
export default class AuthService {
  constructor(@Inject('logger') private logger) {}

  public async SignUp(userSignUpOptions: IUserSignUp): Promise<any> {
    try {
      const userRepo = getRepository(User);
      const user: IUser = userRepo.create({
        username: userSignUpOptions.username,
        password: userSignUpOptions.password,
        email: userSignUpOptions.username,
        createdDate: new Date()
      });

      await userRepo.save(user).catch((err) => {
        throw new Error(err.sqlMessage)
      });

      if (!user) {
        throw new Error('User cannot be created');
      } else {
        console.log("New User Saved", user);
      }

      this.logger.silly('Generating JWT');
      const token = this.generateToken(user);

      return { user, token };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async SignIn(username: string, password: string): Promise<any> {
    try {
      const userRepo = getRepository(User);
      const userRecord: IUser[] = await userRepo.find({ where: { username: username } });

      if (userRecord.length <= 0 || !userRecord) {
        throw new Error('User not registered');
      }

      const user: IUser = userRecord[0];
      
      this.logger.silly('Generating JWT');
      const token = this.generateToken(user);

      return { user, token };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  private generateToken(user: IUser) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);
   
    this.logger.silly(`Sign JWT for userId: ${user.id}`);
    return jwt.sign(
      {
        id: user.id, // We are gonna use this in the middleware 'isAuth'
        user: user.username,
        exp: exp.getTime() / 1000,
      },
      config.jwtSecret
    );
  }
}
