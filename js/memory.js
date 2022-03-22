class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    let j, shuffledCard;
    if (!this.cards) {
      return 
    };

    for (let i=0;i<this.cards.length;i++){
      j = Math.floor(Math.random() * this.cards.length);
      shuffledCard = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = shuffledCard;
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    if (card1 && card2) {
      this.pairsClicked++;
    }
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === (this.cards.length / 2)) {
      return true;
    }
    return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
