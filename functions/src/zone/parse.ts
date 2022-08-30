import { userModel } from '../../../src/models/user';

export const gettingAllUsers = async () => {
  console.log('Getting all Users');
  const users = await userModel.getAllUser();
  console.log('THe users are:', users);
  return users;
};
