function GetInfo() {
    let aSet1 = [5,12320,2];
    let aSet2 = [105,2];
    let aSet3 = [...aSet1, ...aSet2]

    let maxValue = Math.max(...aSet3);
    let minValue = Math.max(...aSet3);
    let log1 = `Max : ${maxValue} / Min : ${minValue}`;
    return log1;
}

// console.log(GetInfo());

// let stText = "*";
// console.log(stText.repeat(10) + " Hello!");





let aStudents = [
    ["Sudent 1", 10],
    ["Sudent 2", 10],
    ["Sudent 3", 10]
];

//console.log(aStudents.reduce((pMax, aStudent) => (pMax<aStudent[1]?aStudent[1]:pMax), 0));

//let aValues = [10, 20, 30, 40, 50];
let aValues = aStudents.map(oStudent => oStudent[1]);
console.log(aValues.reduce((nSum, n) => nSum +n, 0));