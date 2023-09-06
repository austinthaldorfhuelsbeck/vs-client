import { Folder } from "./folder";

export interface Company {
  company_id: number;
  user_id: number;
  company_name: string;
  logo_img_URL: string;
  website_URL: string;
  youtube_URL: string;
  instagram_URL: string;
  facebook_URL: string;
  vimeo_URL: string;
  tiktok_URL: string;
  is_archived: boolean;
  hex1: string;
  hex2: string;
  hex3: string;
  created_date: Date;
  updated_date: Date;
  folders: Array<Folder>;
};