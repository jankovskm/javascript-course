// 1. Da se napise programa koja sto dve nizi so ista dolzina kje gi spoi vo edna niza. Elementite od prvata niza treba da se zacuvaat na parnite pozicii od rezultantnata niza, a elementite od vtorata niza na neparnite pozicii od rezultantnata niza
const firstArray = ['one', 'three', 'five'];
const secondArray = ['two', 'four', 'six'];
const joinedArray = [];
let numOfElements = firstArray.length + secondArray.length;
let tmp;

for(i = 0; i < numOfElements; i++){
    if(i % 2 === 0){
        tmp = firstArray.shift();
        joinedArray.push(tmp);
    } else{
        tmp = secondArray.shift();
        joinedArray.push(tmp);
    }
}

console.log(joinedArray);


// 2. Od proizvolna lista so broevi da se ispecati koj e najmaliot, a koj e najgolemiot broj
const randomList = [50,17,21,8,7,99,3,65,78,1,26];
let smallestInt, biggestInt;

randomList.forEach((num) => {
    if(typeof smallestInt === 'undefined' || num < smallestInt){
        smallestInt = num;
    } 
    if(typeof biggestInt === 'undefined' || num > biggestInt){
        biggestInt = num;
    }
})

console.log("Smallest integer in array is: " + smallestInt);
console.log("Biggest integer in array is: " + biggestInt);


// 3. Od proizvolna lista so broevi da se pronajde dali ima duplikati od bilo koj element.
const duplicateList = [55, 17, 61, 98, 98, 74, 17, 2, 55];
const uniqueVals = [];
let duplicatesVals = "";

duplicateList.forEach((num) => {
    if(uniqueVals.includes(num)){
        duplicatesVals === "" ? duplicatesVals+=num : duplicatesVals+=","+num;
    }else{
        uniqueVals.push(num);
    }
});

console.log("The following numbers are duplicates: " + duplicatesVals);


// 4. Od proizvolna niza so bukvi da se formira zbor, na toj nacin sto sekoja bukva kje se spoi so narednata za da formira string. Primer: ["z", "d", "r", "a", "v", "o"] ===> "zdravo"
const stringArray = ['m', 'o', 'r', 'n', 'i', 'n', 'g'];
let string = "";

stringArray.forEach((letter) => {
    string += letter;
});

console.log("The string in the array is " + string);


// 5. Da se napise programa koja sto kje proveri dali vo nekoja proizvolna niza ima pod-niza, i dokolku ima site elementi od podnizata da se dodadat na krajot od originalnata niza. Primer: [1, 2, [3, 4], 5, 6] ===> [1, 2, 5, 6, 3, 4]
const nestedArray = [7, 8, [11, 12], 9, 10];
nestedArray.forEach((val, i) => {
    if(Array.isArray(val)){
        val.forEach((num) => {
            nestedArray.push(num);
        });
        delete nestedArray[i];
    }
})

console.log(nestedArray.filter(Boolean));