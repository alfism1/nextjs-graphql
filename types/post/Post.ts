export type CategoryType = {
  name: string;
  slug: string;
  boxColor: any;
};

type ImageType = {
  url: string;
  width: number;
  height: number;
};

type Author = {
  name: string;
  picture: ImageType;
};

export type OriginalPostType = {
  title: string;
  slug: string;
  category: CategoryType;
  coverImage: ImageType;
  publishData: string;
  createdAt: string;
};

export type OriginalNodePostType = {
  node: OriginalPostType;
};

export type DetailPostType = OriginalPostType & {
  author: Author;
  source: string[];
  content: any;
  excerpt?: string;
};

type NytimesType = {
  title: string;
  url?: string;
  section: string;
  originalUrl?: string;
  published_date: string;
};

export type NytimesPostType = {
  results: NytimesType[];
};
