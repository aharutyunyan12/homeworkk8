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


class LibraryBookBase extends Book {
    constructor (title, author, bookID) {
        super(title, author)
        this._bookID = bookID
    }

    get bookID() {
        this._bookID = this.bookID
    }

    toString() {
        return `${super.toString()}, {id: ${this._bookID}}`
    }
}

class LibraryBook extends LibraryBookBase {
    constructor (title, author, bookID, quantity) {
        super(title, author, bookID)
        this._quantity = quantity
    }

    get quantity() {
        return this._quantity
    }

    set quantity(quantity) {
        this._quantity = quantity
    }

    toString() {
        return `${super.toString()}, {quantity: ${this._quantity}}`
    }

    increaseQuantityBy(amount) {
        this.quantity += amount
    }

    decreaseQuantityBy(amount) {
        this._quantity -= amount
    }
}