import React from "react";

const Book = (props) => {
  const { title, author, img, children } = props;
  const clickHandler = (author) => {
    console.log(author);
  };
  return (
    <>
      <article className="book">
        <img src={img} alt="chair"></img>
        <h2 onClick={() => console.log(title)}>{title}</h2>
        <p style={{ color: "#627d98", fontSize: "0.75rem" }}>
          {author?.toUpperCase()}
        </p>
        {children}
        <button type="button" onClick={() => clickHandler(author)}>
          Author Name
        </button>
      </article>
    </>
  );
};

export default Book;
