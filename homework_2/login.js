// Da se napise funkcija koja kako parametri prima dva stringovi - username i password. Funkcijata treba da proveri dali username ima samo mali bukvi i minimum 8 karakteri.
// Funkcijata isto taka treba da proveri dali paswordot ima barem edna golema bukva, minimum 8 karakteri, barem eden broj i barem eden specijalen karakter (!, @, #, $, %, ^, &)

// Dokolkusite uslovi se ispolneti, funkcijata treba da ispecati "Login successful"

// Dokolku barem eden od uslovite NE e ispolnet, treba da se ispecati koj uslov ne e zadovolen (ne mora site, dovolno e eden). Primer: "Password must be at least 8 characters long"

function login(username, password){
    let msg;

    //first check username
    if(username.length >= 8){
        const usernameArray = username.split("");

        for (const letter in usernameArray) {
            if(usernameArray[letter] === usernameArray[letter].toUpperCase()){
                return "Username must be in lowercase";
            }
        }
    } else return "Username must be at least 8 chars long";

    //then check pass
    if(password.length >= 8){
        let special, number, upper;
        const passArray = password.split("");
        const arrSpecial = ["!", "@", "#", "$", "%", "^", "&"];
        const arrNumbers = [1,2,3,4,5,6,7,8,9,0];

        for (const char in passArray) {
            if(arrSpecial.includes(passArray[char])){
            }
            if(arrSpecial.includes(passArray[char])){
                special = true;
            }else if(arrNumbers.includes(Number(passArray[char]))){
                number = true;
            }else if(passArray[char] === passArray[char].toUpperCase()){
                upper = true;
            } 
        }

        if(!special || !number || !upper) return "Pass must have at least one number, one special char and one uppercase";
    } else return "Password must be at least 8 chars long";

    return "Login successful";
}

console.log(login('lllllllllllllll', 'abs8888888L#'));