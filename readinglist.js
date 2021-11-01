class BookList {
    constructor() {
        this.all_books = []; //most important argument
        this.next_book = null;
        this.current_book = null;
        this.last_book = null;
    }

    add(book){
        this.all_books.push(book);
    }

    setCurrent(book){
        if (this.current_book)
      console.log(
        `You can't add this book as the current book before finishing ${this.currentBook.title}`
      );
    else {
      book.startReadDate = new Date(Date.now());
      this.current_book = book;
      console.log(`You just started reading ${book._title}`);
    }

    }

    finishCurrentBook(){
        if(!this.current_book)
            console.log("You are not reading any book now");
        
        this.current_book.read = true;
        this.current_book.endread_date = new Date(Date.now());
        this.read ++;
        this.last_book = this.current_book;
        const booksLeft = this.allBooks.filter((b) => !b.read)
        this.next_book = booksLeft;
        this.current_book = null;
    }
}

class Book extends BookList {

    constructor(title,genre,author){
        super();
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.read_date = null;
        this.endread_date = null;
    }

    toString(){
        return `Title: ${this.title},Genre: ${this.genre} Author: ${this.author}`;
    }
}


mylibrary = new BookList();

principito = new Book("principito","narrative","PabloM");
harry_potter = new Book("harry potter y sus amigos","fantasy","Fernan");

lista_libros.add(principito);
lista_libros.add(harry_potter);