import React from 'react';

const books = [
  { title: 'Master React', price: 670 },
  { title: 'Deep Dive into Angular 11', price: 800 },
  { title: 'Mongo Essentials', price: 450 }
];

const BookDetails = () => {
  return (
    <div className="section">
      <h2>Book Details</h2>
      {books.map((book, index) =>
        book.price > 0 ? (
          <div key={index}>
            <strong>{book.title}</strong>
            <p>{book.price}</p>
          </div>
        ) : null // Conditional rendering using short-circuit
      )}
    </div>
  );
};

export default BookDetails;
