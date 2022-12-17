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

  // Loops through each 'book' object in the array and appends them to the HTML, as well as adding an on-click event listener for the 'remove' button
  for (const book of myLibrary) {
    const BookItem = document.createElement("li");
    BookItem.setAttribute("data-library-index", myLibrary.indexOf(book));

    // Button for removing books
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-book";
    removeBtn.addEventListener("click", () => {
      if (confirm("Are you certain you want to remove this book?")) {
        myLibrary.splice(BookItem.getAttribute("data-library-index"), 1);
        displayBooks();
      }
    });

    // Elements to display 'book' content
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
    BookItem.appendChild(removeBtn);

    // Finally append the new book item to the list of books in the html
    bookList.appendChild(BookItem);
  }
}

// Store and update user data by creating new book objects and storing them in an array
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

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

// Collect and process user data
newBookSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const readStatusInput = document.getElementById("read-status");

  if (
    titleInput.value === "" ||
    authorInput.value === "" ||
    pagesInput.value === ""
  ) {
    return;
  }

  let readStatus;
  if (readStatusInput.checked === true) {
    readStatus = "Has been read";
  } else {
    readStatus = "Has not been read";
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

displayBooks(); // Updates pre-saved content unto the html
