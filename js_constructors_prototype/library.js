class Library {
    constructor() {
        this.bookList = [];
    }

    shelve(book) {
        this.bookList.push(book);
        this.bookList.sort((a, b) => a.title.localeCompare(b.title))
        return this;
    }

    findByTitle(name) {
        for (const item of this.bookList) {
            if (item.title.toLowerCase().includes(name.toLowerCase())) {
                return item;
            }
        }
    }

    list() {
        return this.bookList;
    }


}

class Book {
    constructor(title, author, edition) {
        this.author = author;
        this.title = title;
        this.edition = edition;
    }
}

const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
const algebra = new Book("Algebra", ["Marijn Haverbeke"], 3);
const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
const theRustProgLang = new Book(
    "The Rust Programming Language",
    ["Steve Klabnik", "Carol Nichols"],
    2
);
const library = new Library();
library.shelve(speakingJS);
library.shelve(theRustProgLang);
library.shelve(eloquentJS);
library.shelve(algebra);
console.log(library.bookList)

// console.log(library.findByTitle("eloquent"));