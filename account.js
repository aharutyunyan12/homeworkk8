class Account {
    constructor(name, balance, id) {
        this._id = id
        this._name = name
        this._balance = balance
    }

    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    set name(name) {
        this._name = name
    }

    get balance() {
        return this._balance
    }

    set balance(balance) {
        this._balance = balance
    }

    credit(amount) {
        this._balance += amount
        return this._balance
    }

    debit(amount) {
        if (amount > this._balance) {
            return "amount exceeded balance"
        }
        this._balance -= amount
        return this._balance
    }

    transferTo(anotherAccount, amount) {
        if (amount > this._balance) {
            return "amount exceeded balance"
        }
        this._balance -= amount
        anotherAccount.credit(amount)
        return this._balance
    }

    identifyAccounts(account) {
        if (this.id === account.id && this.name === account.name && this.balance === account.balance) {
            return true
        }
        return false
    }

    toString() {
        return `${this._name}'s account balance is ${this._balance}$`
    }
}

let savingAcc = new Account("Saving account", 2000)
let cardAcc = new Account("Card account", 1000)
console.log(savingAcc)
console.log(cardAcc)
console.log(savingAcc.balance)
console.log(savingAcc.credit(400))
console.log(savingAcc.balance)
console.log(savingAcc.debit(9000))
console.log(savingAcc.transferTo(cardAcc, 1000))
console.log(savingAcc.balance)
console.log(cardAcc.balance)