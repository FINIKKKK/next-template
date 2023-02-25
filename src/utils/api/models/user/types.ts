import { ParamsDto, TBase, TTotal } from "../../types";

export type TUsers = TTotal & {
  items: TUser[];
};

export type TUser = TBase & {
  login: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  token: string;
};

export type UserDto = {
  login: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
};

export type UpdateUserDto = Partial<UserDto>;

export type ParamsUserDto = ParamsDto & {
  search?: string;
};
