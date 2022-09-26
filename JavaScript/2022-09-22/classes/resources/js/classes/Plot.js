class Plot {

    constructor(width, height, spacer = 0) {
        this.width = width;
        this.height = height;
        this.spacer = spacer;
    }

    rectangle() {
        return this.width * this.height;
    }

    rightTriangle() {
        return (this.width * this.height) / 2;
    }

    viewRectangle() {
        return 'Stačiakampio plotas yra: ' + this.rectangle() + ' kv.m.';
    }

    viewRightTriangle() {
        return 'Stačiojo trikampio plotas yra: ' + this.rightTriangle() + ' kv.m.';
    }
}

module.exports = Plot;