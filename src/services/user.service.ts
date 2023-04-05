import { userDetails } from '../models/user.model';

class UserService {
  async user() {
    const userDetail = await userDetails.find();
    // console.log('check', userDetail);
    return userDetail;
  }
}

class NewUserService{
  async newUser(data:any){
    const newUser= await userDetails.insertMany(data);
    return newUser;
  }
}

export const userService = new UserService();
export const newUserService=new NewUserService();

//
