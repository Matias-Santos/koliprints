export type OptionT = {
  title: string;
  options: string[];
};

export type ItemT = {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  price: number;
  discount: number;
  rating: number;
  freeShipping: boolean;
  options: OptionT[];
};
