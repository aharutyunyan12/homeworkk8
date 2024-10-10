class CoffeeShop {
    constructor(name, menu, orders) {
        this.name = name
        this.menu = menu
        this._orders = orders
    }

    addOrder(itemName) {
        let item = this.menu.find((menuItem) => menuItem === itemName)
            if (item) {
                this._orders.push(item)
                return "order added"
            }
            else {
                return "this item is currently unavailable"
            }
        
    }

    fulfillOrder() {
        if (this._orders.length > 0) {
            const item = this._orders.shift
            return `the ${item} is ready`
        }
        else  {
            return "all orders have been fulfilled"
        }
    }

    listOrders() {
        return this._orders
    }

    dueAmount() {
        return this.menu.reduce((acc, item) => acc += item.price,0)
    }

    cheapestItem() {
        const item =  this.menu.reduce((acc, item) => {
            return (item.price < acc.price) ? item : acc
        })
        return item.name
    }

    drinksOnly() {
        return this.menu.filter((item) => item.type === 'drink').map((item) => item.name)
    }

    foodOnly() {
        return this.menu.filter((item) => item.type === 'food').map((item) => item.name)
    }
}

const menu = [
    { name: "tuna sandwich", type: "food", price: 5.00 },
    { name: "ham and cheese sandwich", type: "food", price: 4.50 },
    { name: "bacon and egg", type: "food", price: 6.00 },
    { name: "steak", type: "food", price: 12.00 },
    { name: "hamburger", type: "food", price: 8.00 },
    { name: "cinnamon roll", type: "food", price: 2.50 },
    { name: "orange juice", type: "drink", price: 3.00 },
    { name: "lemonade", type: "drink", price: 2.00 },
    { name: "cranberry juice", type: "drink", price: 3.50 },
    { name: "pineapple juice", type: "drink", price: 3.00 },
    { name: "lemon iced tea", type: "drink", price: 2.50 },
    { name: "vanilla chai latte", type: "drink", price: 4.00 },
    { name: "hot chocolate", type: "drink", price: 3.50 },
    { name: "iced coffee", type: "drink", price: 4.50 }
]

const tcs = new CoffeeShop('CoffeeHouse', menu, [])

console.log(tcs.foodOnly())

console.log(tcs.drinksOnly())

console.log(tcs.cheapestItem())

console.log(tcs.dueAmount())

console.log(tcs.listOrders())

console.log(tcs.fulfillOrder())

console.log(tcs.addOrder('guirfier'))