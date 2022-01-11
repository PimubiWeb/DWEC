class Book{
    constructor(title, genre, author){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.read_date = null;    
    }

    finished_reading(){
        this.read = true;
        this.read_date = new Date();
    }
}



class uiBook{
    constructor(book){
        this.modelo = book;
        this.tag = document.createElement('div');
        this.tag.className = "libro";
        this.tag.innerHTML = this.modelo.title;
        this.tag.title = "Género: " + this.modelo.genre + "\nAutor: " + this.modelo.author;
        this.tag.style.backgroundColor = "rgb("+Math.floor(Math.random() * 256 + 1)+", "+Math.floor(Math.random() * 256 + 1)+", "+Math.floor(Math.random() * 256 + 1)+")";         
    }
}