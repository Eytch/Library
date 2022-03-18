// TODO LIST
// 1 - change read and not read in array
// 2 - remove book from display

const close = document.querySelector(".close");
const modal = document.querySelector(".modal_wrapper");
const add = document.querySelector("#addBook");
const addP = document.querySelector(".addText");
const icon = document.querySelector(".plusIcon");
let mark = document.querySelector(".mark");
const form = document.querySelector("form");
const github = document.querySelector(".github");

let bName = document.querySelector("#bookName");
let aName = document.querySelector("#authorName");
let pages = document.querySelector("#pages");
let read = document.querySelector("#check");

let readBook;

let books = [];
let newBooks = [];
class book {
  constructor(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBook() {
  if (read.checked === true) {
    readBook = "READ";
  } else {
    readBook = "NOT READ";
  }
  let addedBook = new book(bName.value, aName.value, pages.value, readBook);
  books.push(addedBook);
  newBooks.push(addedBook);
  console.log(books);

  displayBooks();
}

const displayBooks = () => {
  const booksDiv = document.querySelector(".books");

  for (let i = 0; i < newBooks.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "booksCard";
    booksDiv.insertBefore(newDiv, booksDiv.children[0]);

    const newp = document.createElement("p");
    newp.className = "cName";
    let textNode = document.createTextNode(newBooks[i].name);
    newp.appendChild(textNode);
    newDiv.appendChild(newp);

    const newpp = document.createElement("p");
    newpp.className = "cAuthor";
    textNode = document.createTextNode("Author: " + newBooks[i].author);
    newpp.appendChild(textNode);
    newDiv.appendChild(newpp);

    const newSpan = document.createElement("span");
    newSpan.className = "mark";
    textNode = document.createTextNode(newBooks[i].read);
    newSpan.setAttribute("id", "rID_" + i);

    newSpan.addEventListener("click", () => {
      rId = event.srcElement.id;
      toggleRead(rId);
    });

    newSpan.appendChild(textNode);
    newDiv.appendChild(newSpan);

    newBooks.pop();
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook();
  form.reset();
  modal.style.display = "none";
});

close.addEventListener("click", (e) => {
  e.preventDefault();
  form.reset();
  modal.style.display = "none";
});

add.addEventListener("click", () => {
  modal.style.display = "block";
});

add.addEventListener("mouseover", () => {
  addP.style.opacity = "1";
  icon.style.marginTop = "25px";
});

add.addEventListener("mouseout", () => {
  addP.style.opacity = "0";
  icon.style.marginTop = "70px";
});

function toggleRead(id) {
  let newID = id.split("_").pop();

  if (books[newID].read == "READ") {
    books[newID].read = "NOT READ";
  } else {
    books[newID].read = "READ";
  }
  console.log(newID);
  let updatedREAD = document.querySelector("#" + id);
  updatedREAD.innerHTML = books[newID].read;
  console.log(books[newID]);
}

if (mark) {
  mark.addEventListener("click", () => {
    if (mark.textContent == "READ") {
      mark.textContent = "NOT READ";
      mark.style.backgroundColor = "black";
    } else {
      mark.textContent = "READ";
      mark.style.backgroundColor = "rgb(232, 142, 111)";
    }
  });
  mark = document.querySelector(".mark");
  github.addEventListener("click", () => {
    location.assign("http://www.github.com/Eytch");
  });
}
