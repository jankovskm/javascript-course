// 1. Imate niza od korisnicki email adresi.
// Da se napise funkcija koja  treba da proveri dali sekoj od mailovite e validen
// validen mail e toj mail sto im karakter "@", ".com" ili ".net" i nema prazni mesta
// Otkako ke zavrsi proverkata, treba VO NOVA niza, da se stavat site nevalidni mejlovi, dokolku ima takvi i novata niza da se ispecati

 const emails = ['test@test.com', 'test@ test.com', 'test123123', 'koco@koco.net', 'test@koco.co']

 function checkEmail(params){
    const invalid = [];
    emails.forEach(email => {
       if(email.indexOf(" ") > 0) invalid.push(email);
       else if(email.indexOf("@") === -1 && email.indexOf(".com") === -1 && email.indexOf(".net") === -1){
           invalid.push(email);
       }
      
    });

    return invalid;
 }
    
 console.log(checkEmail(emails));

 //2. Da se napise funkcija koja sto ke prima lista od iminja i preziminja
//   Funkcijata treba da proveri dali site iminja i preziminja zapocnuvaat so golema bukva,
//   i ako ne, togas da ja napravi golema. Site ostanati bukvi, treba da se pretvorat vo mali.
//   Na kraj da se ispecati nizata od transformirani iminja

// const names = ['koco nica', 'alek Dimitriev'] => ['Koco Nica', 'Alek Dimitriev']

const arr = ['koco nica', 'alek DimiTriev']

function namesValidator(names){
    let explodedName;
    correctNames = [];
    names.forEach(fullName => {
        explodedName = fullName.split(" ");
        let tmp = "";
        explodedName.forEach(string => {
            tmp2 = string.toLowerCase();
            tmp += tmp2.charAt(0).toUpperCase() + tmp2.slice(1)+" ";

        })
        correctNames.push(tmp.trim());
    });

    return correctNames;
}

console.log(namesValidator(arr));

// 3. Imame nizaod zivotni na farma.
// Sekoe zivotno e objekt i si ima svoe property broj na noze, i plus drugi svojstva
// So pomosh na posebna funkcija, farmerot treba da izbroi kolku vkupno noze ima vo farmata.

const myAnimals = [
  { type: 'Horse', numberOfLegs: 4 },
  { type: 'Sheep', numberOfLegs: 4 },
  { type: 'Chicken', numberOfLegs: 2 },
  { type: 'Fish', numberOfLegs: 0 },
  { type: 'Dog', age: 7, numberOfLegs: 4 },
  { type: 'Goat', numberOfLegs: 4 }
] //===> TOTAL OF 18 LEGS!

function getNoOfLegs(animals){
    return animals.reduce((noOfLegs, animals) => {
        return noOfLegs += animals.numberOfLegs;
    }, 0)
}

console.log(getNoOfLegs(myAnimals));

// 4. Da se napise funkcija koja ke presmetuva kolku vkupno poeni
// osvoil nekoj sportski tim
// Sportskiot tim e objekt vo koj sto imate broj na porazi,
// broj na pobedeni i broj na neresheni natprevari
// Za sekoja pobedena timot dobiva 3 poeni, za nereshena 1, a za izgubena -2

const myTeam = {
  wins: 3,
  losses: 4,
  draws: 2
}// ==> total points: 3

function getNoOfPoints(team){
    let totalPoints = 0;
    Object.keys(team).forEach(function(key){
        if(key === "wins"){
            totalPoints += (team[key] * 3);
        }else if(key === "losses"){
            totalPoints -= (team[key] * 2);
        } else{
            totalPoints += team[key];
        }

    })

    return totalPoints
}

console.log(getNoOfPoints(myTeam));

//5. Listata od knigi sto ja rabotevme na chas, da se sortira po azbucen rodosled spored imeto na avtorot


const books = [
    {
        author: 'Pirandello',
        name: 'Uno nessuno e centomilla',
        year: 1961,
        ISBN: 1,
        price: 600,
        read: true
    },
    {
        author: 'Svevo',
        name: 'La coscenza di Zeno',
        year: 1964,
        ISBN: 1,
        price: 600,
        read: true
    },
    {
        author: 'Luigi Pirandello',
        name: 'Il fu Mattia Pascal',
        year: 1961,
        ISBN: 1,
        price: 600,
        read: false
    },
    {
        author: 'J.R.R. Tolkien',
        name: 'The Hobbit',
        year: 1910,
        ISBN: 3,
        price: 100,
        read: false
      }
]

function getUnreadBooksSum(allBooks){
    const tmp = [];
    Object.keys(allBooks).forEach(function (key){
        console.log(allBooks[key].author);
        tmp[allBooks[key].author] = allBooks[key];
    });
    tmp.sort();
    const copy = {...tmp};
    console.log(copy.length);
    console.log(copy);

    let i = 0;
    tmp.forEach(element => {
        console.log(element);
        tmp[i] = element;
        i++;
        console.log(tmp);
    });
    console.log(tmp);
    // allBooks.sort(function (one, two){

    // })
    // return allBooks.reduce((currentSum, book) => {
    //     if(!book.read){
    //         return currentSum += book.price
    //     } return currentSum
    // }, 0)
}

const sorted = getUnreadBooksSum(books);
sorted.forEach(element => {
   console.log(element); 
});


