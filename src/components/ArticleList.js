import React from "react";
import Article from "./Article";

export default function ArticleList({ posts }) {
  const post = posts.map((post) => <Article key={post.id} post={post} />);
  return <main>{post}</main>;
}
