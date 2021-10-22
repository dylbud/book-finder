export interface IBook {
  authors: string[];
  title: string;
  publishedDate: Date;
  imageLinks: IImageLinks;
  previewLink: string;
}

export interface IImageLinks {
  smallThumbnail: string;
}
