import axios from "axios";
import { Post } from "./types/post";

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await axios.get("https://dummyjson.com/post");
  return res.data.posts;
};




