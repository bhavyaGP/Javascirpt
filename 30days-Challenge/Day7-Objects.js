const book = {
  title: "what make you happy!",
  author: "Bhavya",
  year: 2024,
  info: function () {
    return `The ${this.title} is written by ${this.author}`;
  },
  updateyear: function (year) {
    this.year = year;
  },
  yeartitle: function () {
    return `The ${this.year} is written by ${this.title}`;
  },
};
// console.log(book);
// console.log(book["author"], ":", book["title"]);

// console.log(book.info());
// book.updateyear(2025);
// console.log(book);

// console.log(book.yeartitle());

const library = {
  name: "Central Library",
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      getTitleAndAuthor: function () {
        return `${this.title} by ${this.author}`;
      },
      updateYear: function (newYear) {
        this.year = newYear;
      },
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
      getTitleAndAuthor: function () {
        return `${this.title} by ${this.author}`;
      },
      updateYear: function (newYear) {
        this.year = newYear;
      },
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      getTitleAndAuthor: function () {
        return `${this.title} by ${this.author}`;
      },
      updateYear: function (newYear) {
        this.year = newYear;
      },
    },
  ],
  getLibraryInfo: function () {
    return `${this.name} has ${this.books.length} books.`;
  },
};

// console.log(library)

// // let bookTitles = library.books.map(book => book.title);
// library.books.forEach((ele)=>{
//     console.log(ele.title);
// });
// console.log(bookTitles);

for (let element in book) {
  //here element have key of books object
//   console.log(`${element}: ${book[element]}`);
  // console.log(element);
}

let keys = Object.keys(book);
console.log("Keys:", keys);

let values = Object.values(book);
console.log("Values:", values);
