// Use find() method to retrieve macthed author info
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

// Find the matching book with the id provided with find method()
function findBookById(books, id) {
  return books.find(book => book.id === id);
}

// Filter books array into two arrays, first one with books that are not returned, second with books that are returned. Put two arrays inside a new array.
function partitionBooksByBorrowedStatus(books) {
  const booksCheckedOut = books.filter(book => !book.borrows[0].returned);
  const booksReturned = books.filter(book => book.borrows[0].returned);
  return [booksCheckedOut, booksReturned];
}

function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  const borrowers = borrows.map(({ id, returned })=> {
    const account = accounts.find(account => account.id === id);
    return {
      ...accounts.find(account => account.id === id),
      returned,
    };
  });
  return borrowers.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
