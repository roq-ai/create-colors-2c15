import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HueInterface {
  id?: string;
  color: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface HueGetQueryInterface extends GetQueryInterface {
  id?: string;
  color?: string;
  user_id?: string;
}
