class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
        this.read = false;
    }

    isRead(){
        return this.read;
    }

    markAsRead(){
        this.read = true;
    }  
}