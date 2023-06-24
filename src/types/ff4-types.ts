import { ItemCategory } from './enum/item-category';

export type FF4ItemFormat = {
  name: string;
  icon: string;
  category: ItemCategory;
  flags: string[];
  items: {
    name: string;
  }[];
};

export type FF4Note = {
  id: string;
  icon: string;
  name: string;
  shop: { name: string; color: string };
};

export type FF4Character = {
  id: string;
  name: string;
  sprite: string;
  value: number;
};

export type FF4Party = FF4Character[];
