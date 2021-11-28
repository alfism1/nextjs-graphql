type CategoryType = {
  name: string;
  slug: string;
  boxColor: any;
};

type ImageType = {
  url: string;
  width: number;
  height: number;
};

export type OriginalPostType = {
  title: string;
  slug?: string;
  category: CategoryType;
  coverImage?: ImageType;
  publishData: string;
  createdAt: string;
};

export type OriginalNodePostType = {
  node: OriginalPostType;
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
