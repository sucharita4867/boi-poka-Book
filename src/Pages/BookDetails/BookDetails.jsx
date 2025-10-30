import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  console.log(data);

  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, image } = singleBook;

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
  };

  return (
    <div className="w-2/3 mx-auto">
      <title>{bookName}</title>
      <meta name="description" content="A website about books and reading." />
      <meta name="keywords" content="books, reading, library, novel" />
      <img className="w-48" src={image} alt="" />
      <h1>{bookName}</h1>
      <button
        onClick={() => handleMarkAsRead(id)}
        className="btn btn-accent m-2"
      >
        Mar as Read
      </button>
      <button className="btn btn-info m-2"> Add to WishList</button>
    </div>
  );
};

export default BookDetails;
