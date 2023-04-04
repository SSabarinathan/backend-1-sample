import { userDetails } from '../models/user.model';

class UserService {
  async user() {
    const userDetail = await userDetails.find();
    // console.log('check', userDetail);
    return userDetail;
  }
}

export const userService = new UserService();

//
