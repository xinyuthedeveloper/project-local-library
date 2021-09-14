function findAccountById(accounts, id) {
  return accounts.find((park) => park.id === id);
}

function sortAccountsByLastName(accounts) {
  const result = accounts.sort((accountA, accountB) => accountA.name.last < accountB.name.last ? -1:1);
  return result;
}

function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
  return books.reduce((acc, book) => {
    return acc + book.borrows.filter(({id}) => id === accountId).length
  }, 0)
}

// helper function
function booksOutByAccount(account, books) {
  const accId = account.id;
  return books.filter((book) => book.borrows.some(borrow => !borrow.returned && borrow.id === accId));
}

function getBooksPossessedByAccount(account, books, authors) {
  const booksOut = booksOutByAccount(account,books)
  booksOut.forEach(book => book['author'] = authors.find(person => person.id === book.authorId));
    return booksOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
