function findAuthorById(authors, id) {
  let found = authors.find((account) => account.id === id);
return found;
}

function findBookById(books, id) {
  let found = books.find((account) => account.id === id);
return found;
}

function partitionBooksByBorrowedStatus(books) {
   let returnedBooks = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
 );
  let availableBooks = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned !== true)
 );
  let bookStatus = [[...availableBooks], [...returnedBooks]];
  return bookStatus;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
