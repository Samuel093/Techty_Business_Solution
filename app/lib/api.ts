import axios from "axios";
import { Post } from "./types/post";

// Response shape from DummyJSON
interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await axios.get<PostsResponse>("https://dummyjson.com/posts");
  return res.data.posts;
};





