class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.predict = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.predict = Math.round((this.max + this.min) / 2);
        return this.predict;
    }

    lower() {
        this.max = this.predict;
    }

    greater() {
        this.min = this.predict;
    }
}

module.exports = GuessingGame;
