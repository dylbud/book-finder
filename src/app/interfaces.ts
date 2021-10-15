export interface IBook {
  authors: string[];
  title: string;
  publishedDate: Date;
  imageLinks: IImageLinks;
}

export interface IImageLinks {
  smallThumbnail: string;
}
