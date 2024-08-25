class GuessingGame {
  constructor() {
    this.minValue;
    this.maxValue;
  }

  setRange(min, max) {
    this.minValue = min;
    this.maxValue = max;
  }

  guess() {
    return Math.round((this.maxValue - this.minValue) / 2);
  }

  lower() {
    this.maxValue = Math.round((this.maxValue - this.minValue) / 2);
  }
}

module.exports = GuessingGame;
