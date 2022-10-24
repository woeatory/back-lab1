import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private usersList: User[] = [];

  createUser(userName: string) {
    const userID = this.usersList.length;
    const newUser = new User(userID, userName);
    this.usersList.push(newUser);
    return newUser;
  }
}
