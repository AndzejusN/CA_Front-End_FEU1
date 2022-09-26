class Perimeter {

    constructor(width, height, spacer = 0) {
        this.width = width;
        this.height = height;
        this.spacer = spacer;
    }

    rectangle() {
        return (this.width + this.height) * 2;
    }

    rightTriangle() {
        return this.width + this.height + this.spacer;
    }

    viewRectangle() {
        return 'Stačiakampio perimetras yra: ' + this.rectangle() + ' m.';
    }

    viewRightTriangle() {
        return 'Stačiojo trikampio perimetras yra: ' + this.rightTriangle() + ' m.';
    }
}

module.exports = Perimeter;