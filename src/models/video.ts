export interface Video {
  video_id: number;
  gallery_id: number;
  video_URL: string;
  video_name: string;
  thumbnail_img_URL: string;
  subtitles_URL: string;
  views: number;
  downloads: number;
  is_displayed: boolean;
  position: number;
  created_at: Date;
  updated_at: Date;
};