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

// Display all books
function displayBooks() {
  const bookList = document.querySelector(".books-container ul");
  bookList.replaceChildren();

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

// Hide and display form
const newBookContainer = document.querySelector(".new-book-container");
const newBookForm = document.querySelector(".new-book-container form");
const newBookBtn = document.getElementById("new-book-btn");
const newBookCancelBtn = document.getElementById("cancel-btn");
const newBookSubmitBtn = document.getElementById("submit-btn");
newBookContainer.removeChild(newBookForm);

newBookBtn.addEventListener("click", () => {
  newBookContainer.appendChild(newBookForm);
  newBookContainer.removeChild(newBookBtn);
});

newBookCancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  newBookContainer.removeChild(newBookForm);
  newBookContainer.appendChild(newBookBtn);
});

// Store and update user data
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

// Collect and process user data
newBookSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const readInput = document.getElementById("read-status");

  if (
    titleInput.value === "" ||
    authorInput.value === "" ||
    pagesInput.value === ""
  ) {
    return;
  }

  addBookToLibrary(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.checked
  );

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.checked = false;
});

displayBooks();
