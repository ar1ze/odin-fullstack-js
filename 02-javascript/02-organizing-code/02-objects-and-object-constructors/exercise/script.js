function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    let infoText = '';
    infoText += `${this.title} by ${this.author}, `;
    infoText += `${this.pages} pages, `;
    infoText += this.red ? 'read already' : 'not read yet';
    return infoText;
  };
}

const title = 'The Hobbit';
const author = 'J.R.R. Tolkien';
const pages = 295;
const read = false;

let book = new Book(title, author, pages, read);
let bookInfo = book.info();
console.log(book);
console.log(bookInfo);