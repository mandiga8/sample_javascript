

function ClassBiggestNumber(numberArray) {
    this.numArray = numberArray;

    this.GetMaximumNumberCombination = function() {
        let num1 = this.numArray.sort(function(a,b){return a-b});
        //let num1 = this.numArray.sort().reverse();
        return parseInt(num1.join(""));
    }
}



let dStart = new Date();
console.log("Process started....");
let array1 = [54, 546, 548, 60];
let obj1 = new ClassBiggestNumber(array1);
console.log("Input :" + array1)
console.log("Biggest Number # " + obj1.GetMaximumNumberCombination());
setTimeout(() => { console.log("Waiting...."); }, 2000);

let dEnd  = new Date();
console.log("Time taken : " + ((dEnd-dStart)/1000).round() + " sec");
console.log("Process ended!");