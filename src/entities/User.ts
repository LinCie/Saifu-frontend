import { BaseEntity } from "./BaseEntity";

export class User extends BaseEntity {
  username: string;

  constructor(user: Partial<User> = {}) {
    super(user);

    this.username = user.username ?? "";
  }
}
