import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private usersList: User[] = [
    new User(0, 'Yurii'),
    new User(1, 'woeatory'),
    new User(2, 'wolterh'),
  ];

  createUser(userName: string) {
    const userID = this.usersList.length;
    const newUser = new User(userID, userName);
    this.usersList.push(newUser);
    return newUser;
  }
}
