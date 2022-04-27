import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";
// import { User } from "./User.entity";

@Entity()
export class Photo extends DateTimeEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    imageUrl: {
        nullable: false;
    }

    // @ManyToOne(() => User, user => user.photos)
    // user: User;
}