class Shiritori {
    constructor (words, game_over) {
        this.words = words
        this.game_over = game_over
    }

    play(string) {
        if (this.game_over) {
            return 'game_over'
        }
        if (this.words.length > 0) {
            const last = this.words[this.words.length - 1]
            const lastLetter = last[last.length - 1]


            if (string[0] !== lastLetter) {
                this.game_over = true 
                return 'game_over'
            }

            if (this.words.includes(string)) {
                this.game_over = true
                return 'game_over'
            }
        }

        this.words.push(string)
        return this.words
        
    }
    restart() {
        this.game_over = false
        this.words = []
        return "game restarted"
    }
}

const myShiritori = new Shiritori([], false)

console.log(myShiritori.play('word'))

console.log(myShiritori.play('dad'))

console.log(myShiritori.play('destination'))

console.log(myShiritori.play('neither'))

console.log(myShiritori.restart())