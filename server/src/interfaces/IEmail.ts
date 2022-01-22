import { IUser } from './IUser';

export interface Email {
    id: number;
    to: IUser;
    subject: string;
    body: string;
    sentDate: Date;
    receivedDate: Date;
    isSent: boolean;
}
