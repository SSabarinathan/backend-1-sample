import { Request, Response } from 'express';
import { userService } from '../services/user.service';

class UserController {
  user(req: Request, res: Response) {
    const users = userService.user();
    users
      .then((_user) => {
        res.send(_user);
        console.log(_user);
      })
      .catch((err) => console.log('something went wrong', err));
  }
}

export const userController = new UserController();

//
