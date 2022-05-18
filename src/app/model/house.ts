export interface House {
  id?: number;
  name?: string;
  area?: number;
  city?: {
    id?: number,
    name?: string;
  };
  location?: string;
  bedroom?: number;
  bathroom?: number;
  price?: number;
  description?: string;
  img?: File;
  count_rent?: number;
  statusHouse?: {
    id?: number;
    name?: string;
  };
  type?: {
    id?: number;
    name?: string;
  };
  user?: {
    id?: number;
    username?: string;
  };
}
