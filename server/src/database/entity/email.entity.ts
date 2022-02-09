import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail, IsDate, IsBoolean } from 'class-validator';

@Entity({ name: 'email' })
export class Email {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsEmail()
    to: string;

    @Column()
    subject: string;

    @Column()
    body: string;

    @Column()
    @IsDate()
    sentDate: Date;

    @Column()
    @IsDate()
    receivedDate: Date;

    @Column()
    @IsBoolean()
    isSent: boolean;
}
