/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
const myLibrary = [
  {
    title: "Blood's A Rover",
    author: "James Elroy",
    numOfPages: "500",
    readStatus: "Has been read",
  },
  {
    title: "Mistborn",
    author: "Brandon Sanderson",
    numOfPages: "400",
    readStatus: "Has been read",
  },
  {
    title: "Harry Potter",
    author: "J. K. Rowling",
    numOfPages: "250",
    readStatus: "Has not been read",
  },
];

// Book object constructor
function Book(title, author, numOfPages, readStatus) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.readStatus = readStatus;
}

function displayBooks() {
  const bookList = document.querySelector(".books-container ul");
  bookList.replaceChildren();

  // eslint-disable-next-line no-restricted-syntax
  for (const book of myLibrary) {
    const BookItem = document.createElement("li");

    const BookTitle = document.createElement("p");
    const BookAuthor = document.createElement("p");
    const BookPages = document.createElement("p");
    const BookReadStatus = document.createElement("p");
    BookTitle.textContent = book.title;
    BookAuthor.textContent = book.author;
    BookPages.textContent = book.numOfPages;
    BookReadStatus.textContent = book.readStatus;

    BookItem.appendChild(BookTitle);
    BookItem.appendChild(BookAuthor);
    BookItem.appendChild(BookPages);
    BookItem.appendChild(BookReadStatus);

    bookList.appendChild(BookItem);
  }
}

function addBookToLibrary() {
  // collect values from user
  const title = prompt("Book title?");
  const author = prompt("Book author?");
  const pages = prompt("Number of pages?");
  const read = prompt("Read? (true/false)");

  // create new book objects using the values as properties
  const newBook = new Book(title, author, pages, read);

  // store the objects in myLibrary
  myLibrary.push(newBook);
  displayBooks();
}

displayBooks();
