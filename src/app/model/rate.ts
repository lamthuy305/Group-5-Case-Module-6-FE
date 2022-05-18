import {House} from "./house";
import {User} from "./user";

export interface Rate {
  id?:number;
star?: number;
house?: House;
user?: User;
}
