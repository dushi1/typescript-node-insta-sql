import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";
import { Photo } from "./Photos";

@Entity({ name: "user" })
class User extends DateTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ name: "isActive", type: "boolean", default: true })
  @OneToMany(() => Photo, (photo) => photo.user)
  photos: Photo[];
}

export default User;
