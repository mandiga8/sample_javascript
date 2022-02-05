function GetFirstNonRepeativeNumber(stValue){
    this.stValue = stValue;
    let cArr1 = this.stValue.split("");
    this.getFirstNonPepeativeChar = function() {
        let  oCharCounts = getCharacterCounts();
        let cFirstNonRepeativeChar = '';
        let objTemp = Object.keys(oCharCounts);
        for(let i=0; i<cArr1.length; i++){
            x = cArr1[i];
            if (oCharCounts[x] == 1){
                cFirstNonRepeativeChar = x;
                break;
            };
        };
        return cFirstNonRepeativeChar;
    }

    let getCharacterCounts = function(){
        let oCharCounts = {};
        for(let i=0; i<cArr1.length; i++){
            oCharCounts[cArr1[i]] = (oCharCounts[cArr1[i]] || 0)+ 1;
        }
        return oCharCounts;        
    }
}

let stInput = "GeeksforGeeks"
let obj1 = new GetFirstNonRepeativeNumber2(stInput);
console.log("Input : " + stInput);
console.log("First Non Repeating Character : " + obj1.getFirstNonPepeativeChar());