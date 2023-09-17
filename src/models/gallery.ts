import { Video } from "./video";

export interface BaseGallery {
  folder_id: number;
  gallery_name: string;
  created_at: Date;
  updated_at: Date;
};

export interface Gallery extends BaseGallery {
  gallery_id: number;
  background_img_URL: string;
  hex1: string;
  hex2: string;
  hex3: string;
  videos: Array<Video>;
};