class Author {
    constructor(name, email, gender) {
        this._name = name
        this._email = email
        this._gender = gender.toLowerCase()
    }

    get name() {
        return this._name
    }

    get email() {
        return this._email
    }

    get gender() {
        return this._gender
    }

    toString() {
        return this._gender === 'male' ? `Mr. ${this.name}` : `Ms. ${this.name}`
    }
}

class Book {
    constructor(title, author, price, quantity) {
        this._title = title
        this._author = author
        this._price = price
        this._quantity = quantity
    }

    get title() {
        return this._title
    }

    set title(title) {
        this._title = title
    }

    get author() {
        return this._author
    }

    set author(author) {
        this._author = author
    }

    get price() {
        return this._price
    }

    set price(price) {
        this._price = price
    }

    get quantity() {
        return this._quantity
    }

    set quantity(quantity) {
        this._quantity = quantity
    }

    getProfit() {
        return this._price * this._quantity
    }

    toString() {
        return `${this._title} was written by ${this._author}, the price is ${this._price}, and the quantity is ${this._quantity}`
    }
}

let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe")
console.log(author1.gender)
console.log(author1.name)
console.log(author1.toString())

let book1 = new Book("The Casual Vacancy", author1, 11.70, 100)
console.log(book1.getProfit())
console.log(book1.toString())