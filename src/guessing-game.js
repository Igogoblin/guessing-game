class GuessingGame {
  constructor() {
    this.minValue;
    this.maxValue;
  }

  setRange(min, max) {
    this.minValue = min;
    this.maxValue = max;
  }
}

module.exports = GuessingGame;
