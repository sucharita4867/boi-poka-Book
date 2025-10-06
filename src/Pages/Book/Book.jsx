import React, { use } from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
const Book = ({ bookPromise }) => {
  const datas = use(bookPromise);
  console.log(datas);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {datas.map((data, bookId) => (
        <div key={bookId}>
          <div className="card bg-base-100 w-85 shadow-xl border p-4 ">
            <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
              <img className="h-[166px]" src={data.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex justify-center items-center gap-8">
                {data.tags.map((tag) => (
                  <p>{tag}</p>
                ))}
              </div>
              <h2 className="card-title">
                {data.bookName}
                <div className="badge badge-secondary">
                  {data.yearOfPublishing}
                </div>
              </h2>
              <p>Book By : {data.publisher}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{data.category}</div>
                <div className="badge badge-outline">
                  {data.rating} <FaRegStarHalfStroke />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Book;
