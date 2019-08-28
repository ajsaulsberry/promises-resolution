const glassFilled = new Promise((resolve, reject) => {
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
  
// function pourWater(glasses) {
//         let completed = 0;
//         while (completed < glasses) {
//             let curGlassNum = completed + 1;
//             var curGlass = new Glass(curGlassNum);
//             glassFilled.then(result => {curGlass.fillLevel = result;}, errorMsg => {curGlass.full = errorMsg;});
//             if (curGlass.full === undefined)
//             {
//                 console.log(`Good pour! Glass ${curGlass.glassNum} is ${curGlass.fillLevel}% full. Drink up!`);
//             } else {
//                 console.log(`That's a bad pour!`);
//             }

//             completed += 1;
//         }
//  }

// pourWater(5);

function serveGlass(glassId, result) {
    console.log(`That's a good pour! Glass ${glassId} is ${result}% full. Drink up.`)
}

function returnGlass(glassId, errorMsg) {
    console.log(`That's a bad pour. Glass ${glassId} ${errorMsg} Try again.`);
}

function pour() {
    var curGlass = new Glass();
    curGlass.glassNum = 1;        
    glassFilled.then(result => serveGlass(curGlass.glassNum, result), errorMsg => returnGlass(curGlass.glassNum, errorMsg));
}

pour();