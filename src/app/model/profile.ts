import {User} from "./user";

export interface Profile {
  id?: number,
  name?: string,
  birthday?: Date,
  avatar?: string,
  email?: string,
  address?: string,
  phone?: string,
  user?: User
}
