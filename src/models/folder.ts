export interface BaseFolder {
  company_id: number;
  folder_name: string;
  created_at: Date;
  updated_at: Date;
};

export interface Folder extends BaseFolder {
  folder_id: number;
};