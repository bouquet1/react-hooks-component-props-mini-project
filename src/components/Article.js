import React from "react";

export default function Article({
  title = "Components 101",
  date = "January 1, 1970",
  preview = "Setting up the building blocks of your site",
  minutes,
}) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

//boyle yaptim test den omce calisiyor gayet guzel ama illa testin istedigi sekil yaptim yukarda
/*
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
*/
