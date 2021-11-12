import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({ name: 'user' })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    phoneNumber: string;
}
