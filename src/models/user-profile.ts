import { Company } from "./company";

export interface UserProfile {
  user_id: number;
  name: string;
  email: string;
  is_dark_mode: boolean;
  picture: string;
  created_date: string;
  updated_date: string;
  companies: Array<Company>;
}
