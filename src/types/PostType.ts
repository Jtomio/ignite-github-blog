import { User } from "./User";

export interface PostType {
  id: number;
  title: string;
  user: User;
  body: string;
  comments: number;
  created_at: string;
  html_url: string;
}

export interface Repository {
  total_count: number;
  items: PostType[];
}