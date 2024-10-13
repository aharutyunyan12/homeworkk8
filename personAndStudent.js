class Person {
    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName
        this._lastName = lastName
        this._gender = gender
        this._age = age
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

    get gender() {
        return this._gender
    }

    set gender(gender) {
        this._gender = gender
    }

    get age() {
        return this._age
    }

    set age(age) {
        this._age = age
    }

    toString() {
        return `${this._firstName} ${this._lastName}, ${this._age} y/o`
    }
}
    

  