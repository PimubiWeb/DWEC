class BookList {
    constructor(books = [],bread = 0){
        this.books = books; //most important argument
        this.read = bread;
        this.notread = this.books.length - this.read;
        this.next = 0;
        this.current = 0;
        this.last = 0;
    }

    add(book){
        this.books.push(book);
    }

    finishCurrentBook(){
        this.read ++;
        this.last = this.current;
        this.book
    }

}



class Book {
    constructor(title,genre,author,read,read_date){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.read_date = read_date;
    }
}

principito = new Book("principito","narrative","PabloM",false,new Date());

