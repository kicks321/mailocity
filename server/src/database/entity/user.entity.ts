import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {IsEmail, IsDate} from "class-validator";

@Entity({ name: 'user' })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
    })
    @IsEmail()
    username: string;

    @Column()
    password: string;

    @Column({
        nullable: true,
    })
    firstName: string;
    
    @Column({
        nullable: true,
    })
    lastName: string;

    @Column({
        nullable: true,
    })
    @IsEmail()
    email: string;

    @Column({
        nullable: true,
    })
    createdDate: Date;

    @Column({
        nullable: true,
    })
    @IsDate()
    modifiedDate: Date;
}
