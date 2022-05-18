import {House} from "./house";
import {User} from "./user";

export interface Rate {
  id?:number;
ratePoint?: number;
house?: House;
user?: User;
}
