import { Request, Response } from "express";
import { newUserService, userService } from "../services/user.service";

class UserController {
  user(req: Request, res: Response) {
    const users = userService.user();
    users
      .then((_user) => {
        res.send(_user);
        console.log(_user);
      })
      .catch((err) => console.log("something went wrong", err));
  }
}

class NewUserController {
  public async newUser(req: Request, res: Response) {
    const newUser =await newUserService.newUser(req.body);
    res.send(newUser)

    // newUser.then((result) => {
    //     res.send(result);
    //     // console.log(result);
    //   })
    //   .catch((err) => console.log("data not inserted", err));
  }
}

export const userController = new UserController();
export const newUserController = new NewUserController();

//
