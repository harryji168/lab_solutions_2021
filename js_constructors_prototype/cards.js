class Card {
    constructor(value, suit) {
        if (value === 1) {
            this.value = 'Ace';
        } else if (value === 11) {
            this.value = 'Jack';
        } else if (value === 12) {
            this.value = 'Queen';
        } else if (value === 13) {
            this.value = 'King';
        } else {
            this.value = value;
        }
        this.suit = suit;
    }
    toString() {
        return `Card { ${this.value} of ${this.suit} }`;
    }
    toObj() {
        return {
            val: this.value,
            suit: this.suit
        }
    }
}
const aceOfSpades = new Card(1, 'spades');
console.log(aceOfSpades.toString());
const tenOfHearts = new Card(10, 'hearts');
console.log(tenOfHearts.toString());
const kingOfDiamonds = new Card(13, 'diamonds');
console.log(kingOfDiamonds.toString());
// aceOfSpades.toString() // returns 'Card { Ace of Spades }'
// tenOfHearts.toString() // returns 'Card { 10 of Hearts }'
// kingOfDiamonds.toString() // returns 'Card { King of Diamonds }'


class Deck {
    constructor() {
        this.cards = [];
    }
    reset() {
        const suitsArr = ['clubs', 'spades', 'hearts', 'diamonds'];
        for (let i = 1; i < 14; i++) {
            suitsArr.forEach(element => {
                const tempCard = new Card(i, element);
                this.cards.push(tempCard.toObj());
            })
        }
    }
    shuffle() {
        for (let i = 0; i < this.cards.length; i++) {
            const currentCard = this.cards[i];
            const randomNumber = parseInt(Math.random() * this.cards.length)
            const randomCard = this.cards[randomNumber];
            const tempElement = { ...currentCard };
            this.cards[i] = { ...randomCard };
            this.cards[randomNumber] = tempElement;
        }
        console.log(this.cards);
    }

    draw() {
        const topCard = this.cards.shift();
        return topCard;
    }
}

const deck = new Deck();

console.log(deck.reset());

deck.shuffle();

console.log(deck.draw());