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

class Glass {
    constructor(glassId, level) {
        this.GlassId = glassId;
        this.fillLevel = level;
    }
}
  
function serveGlass(curGlass, result) {
    console.log(`That's a good pour! Glass ${curGlass.GlassId} is ${result}% full. Drink up.`)
}

function returnGlass(curGlass, errorMsg) {
    console.log(`That's a bad pour. Glass ${curGlass.GlassId} ${errorMsg} Try again.`);
}

function pour(ordered) {
    let attempted = 1;
    while (attempted <= ordered) {
        var curGlass = new Glass(attempted);
        console.log(curGlass);
        fillGlass.then(result => serveGlass(curGlass, result), errorMsg => returnGlass(curGlass, errorMsg));
        attempted++;
    }
}

pour(3);

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