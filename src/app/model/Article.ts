import {Category} from "./Category";
import {Tag} from "./Tag";
/**
 * Created by jamescsh on 8/25/17.
 */
export class Article {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  time: Date;
  content: string;
  readTimes: number;
  commentTimes: number;
  isTop: boolean;
  categories: Category[];
  tags: Tag[];
  comments: Comment[];
}
