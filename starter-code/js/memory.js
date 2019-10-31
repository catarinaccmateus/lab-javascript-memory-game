class MemoryGame {

  constructor(cards) {
    this.cards = cards;
    // Add the rest of the properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let j, x, i;
    for (i = this.cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = x;
    }
    return this.cards;
  }

  checkIfPair() {
    this.pairsClicked += 1;
    if (this.pickedCards[0].dataset.cardName === this.pickedCards[1].dataset.cardName) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    let numberOfPairs = (this.cards.length) / 2;
    if (this.pairsGuessed === numberOfPairs) {
      return true;
    } else {
      return false;
    }
  }
}

