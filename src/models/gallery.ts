import { Video } from "./video";

export interface Gallery {
  gallery_id: number;
  folder_id: number;
  gallery_name: string;
  background_img_URL: string;
  hex1: string;
  hex2: string;
  hex3: string;
  created_at: Date;
  updated_at: Date;
  videos: Array<Video>;
};