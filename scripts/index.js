// Book object constructor
function Book(title, author, numOfPages, readStatus) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.readStatus = readStatus;
}

Book.prototype.changeStatus = function changeStatus() {
  if (this.readStatus === "Has been read") {
    this.readStatus = "Has not been read";
  } else {
    this.readStatus = "Has been read";
  }
};

const myLibrary = [];

// HTML elements
const bookList = document.getElementById("book-list");
const newBookContainer = document.querySelector(".new-book-container");
const newBookForm = document.querySelector(".new-book-container form");
const newBookBtn = document.getElementById("new-book-btn");
const newBookCancelBtn = document.getElementById("cancel-btn");
const newBookSubmitBtn = document.getElementById("submit-btn");
newBookContainer.removeChild(newBookForm);

// Display form and remove buton on click
newBookBtn.addEventListener("click", () => {
  newBookContainer.appendChild(newBookForm);
  newBookContainer.removeChild(newBookBtn);
});

// Remove form and display button on click
newBookCancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  newBookContainer.removeChild(newBookForm);
  newBookContainer.appendChild(newBookBtn);
});

// Reusable func for creating the 'li' elements to display library content
function createBookElements(bookObject) {
  const BookItem = document.createElement("li");
  BookItem.setAttribute("data-library-index", myLibrary.indexOf(bookObject));

  // Child elements to display 'bookObject' content
  const BookTitle = document.createElement("p");
  const BookAuthor = document.createElement("p");
  const BookPages = document.createElement("p");
  const BookReadStatus = document.createElement("p");
  BookTitle.textContent = bookObject.title;
  BookAuthor.textContent = bookObject.author;
  BookPages.textContent = bookObject.numOfPages;
  BookReadStatus.textContent = bookObject.readStatus;

  // Button for removing books
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";

  removeBtn.addEventListener("click", () => {
    if (confirm("Are you certain you want to remove this book?")) {
      // change value in myLibrary
      myLibrary.splice(BookItem.getAttribute("data-library-index"), 1);

      // change value on display
      bookList.removeChild(BookItem);

      // update library index attribute
      for (let i = 0; i < myLibrary.length; i += 1) {
        bookList.childNodes[i].setAttribute("data-library-index", i);
      }
    }
  });

  // Button for changing read status
  const changeStatusBtn = document.createElement("button");
  changeStatusBtn.textContent = "Change read status";

  changeStatusBtn.addEventListener("click", () => {
    bookObject.changeStatus(); // change value in myLibrary
    BookReadStatus.textContent = bookObject.readStatus; // change value on display
  });

  // Append child elements to li element
  BookItem.appendChild(BookTitle);
  BookItem.appendChild(BookAuthor);
  BookItem.appendChild(BookPages);
  BookItem.appendChild(BookReadStatus);
  BookItem.appendChild(changeStatusBtn);
  BookItem.appendChild(removeBtn);

  // Finally return the new book li element
  return BookItem;
}

// Update user data on front and backend
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  const bookElement = createBookElements(newBook);
  bookList.appendChild(bookElement);
}

// Collect data and process book submission
newBookSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const readStatusInput = document.getElementById("read-status");

  let readStatus;
  if (readStatusInput.checked === true) {
    readStatus = "Has been read";
  } else {
    readStatus = "Has not been read";
  }

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
    readStatus
  );

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readStatusInput.checked = false;
});

// // Display all books if any was saved prior
// function displayBooks() {
//   for (let i = 0; i < myLibrary.length; i += 1) {
//     const bookElement = createBookElements(myLibrary[i]);
//     bookList.appendChild(bookElement);
//   }
// }

// // Sample data
// const mistborn = new Book(
//   "Mistborn",
//   "Brandon Sanderson",
//   400,
//   "Has been read"
// );
// const stormlight = new Book(
//   "The Stormlight Archive",
//   "Brandon Sanderson",
//   1200,
//   "Has been read"
// );
// const alloyOfLaw = new Book(
//   "Alloy of Law",
//   "Some popular guy",
//   45,
//   "Has been read"
// );
// myLibrary.push(mistborn, stormlight, alloyOfLaw);

// displayBooks();
