class Book {
    constructor(title, author) {
        this._title = title
        this._author = author
    }

    get title() {
        return this._title
    }

    get author() {
        return this._author
    }

    toString() {
        return `${this._title} was written by ${this._author}`
    }

    isTheSameBook(book) {
        if (this.title === book.title && this.author === book.author) {
            return true
        }
        return false
    }
}
