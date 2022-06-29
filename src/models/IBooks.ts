export interface IBooks {
	id?: string;
	etag?: string;
	volumeInfo?: IVolumeInfo;
}

export interface IVolumeInfo {
	authors?: string[];
	imageLinks?: {
		thumbnail?: string;
	};
	categories?: string[];
	previewLink?: string;
	pageCount?: number;
	description?: string;
	language?: string;
	title?: string;
	publishedDate?: string;
	averageRating?: number;
}

export interface ICategoryProps{
	id: string;
	title: string;
	onHandleClick: (id: string) => void;
}