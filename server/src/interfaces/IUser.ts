export interface IUser {
    _id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
}
export interface IUserSignUp {
    username: string;
    password: string;
  }