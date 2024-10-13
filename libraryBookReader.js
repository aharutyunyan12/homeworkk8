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

class ReaderBook extends LibraryBookBase {
    constructor(title, author, bookID, expirationDate, isReturned) {
        super(title, author, bookID)
        this._expirationDate = expirationDate
        this._isReturned = isReturned
    }

    get expirationDate() {
        return this._expirationDate
    }

    set expirationDate(expirationDate) {
        this._expirationDate = expirationDate
    }

    get isReturned() {
        return this._isReturned
    }

    set isReturned(isReturned) {
        this._isReturned = isReturned
    }

    toString() {
        return `${super.toString()}, {expiration date: ${this._expirationDate}}, {is returned: ${this._isReturned}}`
    }
}

class Reader extends ReaderBook{
    constructor(title, author, bookID, quantity, expirationDate, isReturned, firstName, lastName, readerId) {
        super(title, author, bookID, quantity, expirationDate, isReturned)
        this._firstName = firstName 
        this._lastName = lastName
        this._readerId = readerId
        this._books = [
            `${super._title}`,
            `${super._author}`,
            `${super.__bookID}`,
            `${super._quantity}`,
            `${super._expirationDate}`,
            `${super._isReturned}`
        ]
    }

    get firstName() {
        return this._firstName
    }

    set firstName(firstName) {
        this._firstName = firstName
    }

    get lastName() {
        return this._lastName
    }

    set lastName(lastName) {
        this._lastName = lastName
    }

    get readerId() {
        this._readerId
    }

    set readerId(readerId) {
        this._readerId = readerId
    }

    toString() {
        return `${this._firstName} ${thi._lastName}, {readerId: ${this.readerId}}`
    }

    borrowBook(book, library) {

    }
}