const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
draw: function() {
    console.log('draw');
    }
};

circle.draw();

function createCircle(radius) {
return {
    radius,
    draw: function() {
        console.log('draw');
        }
    };
}

const circleTwo = createCircle(1);
circleTwo.draw();

