class Console {
    constructor(type) {
        this.type = type
        this.history = []
    }

    log(...args) {
        const output = `${this.type}: ${args.map(arg => {
            if (typeof arg === 'object' && arg !== null) {
                return `{${Object.entries(arg).map(([key, value]) => `${key}:${value}`).join(', ')}}`
            } 
            else if (Array.isArray(arg)) {
                return `[${arg.join(', ')}]`
            
            } else {
                return String(arg)
            }
        }).join(', ')}`

        this.history.push(output)

        return output
    }

    getHistory(range) {
        if (!range) {
            return this.history.join(' ')
        }
        const [start, end] = range

        return this.history.slice(start,end)
    }

    clearHistory() {
        this.history = []

        return true
    }
}

const myConsole = new Console('Regular')
const fancyConsole = new Console('Fancy')

console.log(myConsole.log([0, 1, 2, 3])) 
console.log(fancyConsole.log({ a:1, b:2 }))
console.log(myConsole.log("ok : ", 1, 2, 3))
console.log(myConsole.clearHistory())
console.log(myConsole.getHistory())