import { useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../services/axios";
import { PostType, Repository } from "../types/PostType";

interface PostsContextType {
  posts: PostType[];
  fetchPosts: (query?: string) => Promise<void>;
}

interface PostsProviderProps {
  children: React.ReactNode;
}

export const PostsContext = createContext({} as PostsContextType);

export function PostsProvider({ children }: PostsProviderProps) {
  const username = "Jtomio";
  const repo = "ignite-github-blog";

  const [posts, setPosts] = useState<PostType[]>([]);

  async function fetchPosts(query?: string) {
    const response = await api.get<Repository>("search/issues", {
      params: {
        q: `${query ?? ""}repo:${username}/${repo}`
      }
    });

    setPosts(response.data.items);
  }

  useEffect(() => {
    fetchPosts().catch(error => console.error(error));
  }, []);

  return (
    <PostsContext.Provider
      value={{
        posts,
        fetchPosts
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
