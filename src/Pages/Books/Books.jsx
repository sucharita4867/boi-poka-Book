import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = () => {
  //   const [allBooks, setAllBooks] = useState([]);
  //   useEffect(() => {
  //     fetch(
  //       "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAllBooks(data);
  //       });
  //   }, []);
  const bookPromise = fetch(
    "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"
  ).then((res) => res.json());
  return (
    <div>
      <h1 className="text-center text-2xl font-bold p-8">Books</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Book bookPromise={bookPromise}></Book>
      </Suspense>
    </div>
  );
};

export default Books;
