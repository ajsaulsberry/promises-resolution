const fillGlass = new Promise((resolve, reject) => {
    setTimeout(() => {
        let level = Math.random();
        if (level >= 0.7) {
            resolve(Math.round(level * 100));
        } else {
            reject('failed!');
        }
    }, 500); // Timeout represents the length of time it takes to pour a glass, more or less.
});

function fillGlassAsync(filltime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let level = Math.random();
            if (level >= 0.7) {
                resolve(Math.round(level * 100));
            } else {
                reject('failed!');
            }
        }, filltime); // Timeout represents the length of time it takes to pour a glass, more or less.    
    });
}

class Glass {
    constructor(glassId, level) {
        this.GlassId = glassId;
        this.fillLevel = level;
    }
}
  
function serveGlass(curGlass, result) {
    console.log(curGlass);
    console.log(`That's a good pour! Glass ${curGlass.GlassId} is ${result}% full. Drink up.`)
}

function returnGlass(errorMsg) {
    console.log(`That's a bad pour. Glass ${errorMsg} Try again.`);
}

function pour(ordered, filltime) {
    let attempted = 1;
    while (attempted < ordered) {
        // var curGlass = new Glass(attempted);
        // console.log(curGlass);
        var fillGlass = fillGlassAsync(filltime);
        fillGlass.then(result => serveGlass(new Glass(attempted), result), errorMsg => returnGlass(errorMsg));
        attempted++;
    }
}

pour(3, 500);

// Problem: although a unique object is being created each iteration, 
// only the last object is being used in the callback functions.

// Output:
// That's a bad pour. Glass 3 failed! Try again.
// That's a bad pour. Glass 3 failed! Try again.
// That's a bad pour. Glass 3 failed! Try again.

// Or something like:
// That's a good pour! Glass 3 is 74% full. Drink up.
// That's a good pour! Glass 3 is 74% full. Drink up.
// That's a good pour! Glass 3 is 74% full. Drink up.