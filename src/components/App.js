import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";

console.log(blogData);
const { name, image, about, posts } = blogData;

function App() {
  return (
    <div className="App">
      <Header name={name} />
      <About image={image} about={about} />
    </div>
  );
}

export default App;
