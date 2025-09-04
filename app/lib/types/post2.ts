export interface Post {
  id: number;
  title: string;
  body: string;
  reactions: number;
  tags: string[];
  userId: number;
}
