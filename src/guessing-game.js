class GuessingGame {
  constructor() {
    this.minValue;
    this.maxValue;
  }

  setRange(min, max) {
    this.minVal = min;
    this.maxVal = max;
  }

  guess() {
    return Math.ceil((this.maxVal + this.minVal) / 2);
  }

  lower() {
    this.maxVal = Math.round((this.maxVal + this.minVal) * 0.5);
  }

  greater() {
    this.minVal = Math.round((this.minVal + this.maxVal) / 2);
  }
}

module.exports = GuessingGame;
