interface ITimestamps {
	createdAt: string;
	updatedAt: string;
}

export interface IUser extends ITimestamps {
  _id: string;
  name: string;
  email: string;
  companyName: string;
  img: string;
  companyImg: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  primaryFont: string;
  secondaryFont: string;
  galleries: Partial<IGallery>[];
  social?: Partial<ISocial>;
}

export interface IGallery extends ITimestamps {
	_id: string;
	userId: string;
	name: string;
	img: string;
	videos: Partial<IVideo>[];
}

export interface IVideo extends ITimestamps {
	_id: string;
	galleryId: string;
	name: string;
	img: string;
	video: string;
	views: number;
	downloads: number;
	displayed: boolean;
}

export interface ISocial extends ITimestamps {
	_id: string;
	userId: string;
	website: string;
	facebook?: string;
	instagram?: string;
	tiktok?: string;
	vimeo?: string;
	youtube?: string;
}
