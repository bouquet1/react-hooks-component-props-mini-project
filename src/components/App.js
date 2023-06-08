import React from "react";
import blogData from "../data/blog";
import Header from "./Header";

console.log(blogData);
const { name, image, about, posts } = blogData;

function App() {
  return (
    <div className="App">
      <Header name={name} />
    </div>
  );
}

export default App;
