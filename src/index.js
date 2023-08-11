import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { bookList } from "./books";
import SpecificBook from "./Book";

function BookList() {
  return (
    <>
      <section className="booklist">
        {bookList.map((book) => {
          return (
            <SpecificBook key={book.id} {...book}>
              <p> This is content projection!!! </p>
            </SpecificBook>
          );
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
