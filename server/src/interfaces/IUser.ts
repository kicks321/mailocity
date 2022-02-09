export interface IUser {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    createdDate: Date;
    modifiedDate: Date;
}
export interface IUserSignUp {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
}
