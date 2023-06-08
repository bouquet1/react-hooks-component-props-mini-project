import React from "react";

export default function Article({ post }) {
  const { title, date = "January 1, 1970", preview, minutes } = post;
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}
