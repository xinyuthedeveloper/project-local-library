function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter(book => !book.borrows[0].returned).length;
}

function getMostCommonGenres(books) {
  const genreCount = books.reduce((acc, {genre}) => {
    (acc[genre]) ? acc[genre] ++ : acc[genre] = 1;
    return acc;
  }, {})
  const names = Object.keys(genreCount);
  const output = names.map((name) => ({name,count: genreCount[name]}));
  return output.sort((a, b) => b.count - a.count).slice(0,5);
}

function getMostPopularBooks(books) {
  const borrows = books.map(book => ({name: book.title, count: book.borrows.length}));
  borrows.sort((a, b) => b.count - a.count);
  return borrows.slice(0, 5);
}

function getMostPopularAuthors(books,authors) {
  const updatedAuthor = authors.map(author => {
    return {...author, count: books.filter(book => book.authorId === author.id).reduce((acc, book) => acc + book.borrows.length, 0)}});
    const sortAuthor = updatedAuthor.sort((authorA, authorB) => authorB.count - authorA.count);
  return sortAuthor.map(author => {
    const {name:{first, last},count} = author;
    return {name:`${first} ${last}`, count: count}
  }).slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
