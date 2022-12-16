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

function Book(title, author, numOfPages, readStatus) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.readStatus = readStatus;
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
}
