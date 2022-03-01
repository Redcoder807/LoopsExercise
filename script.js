for (i = 1; i <= 7; i++){
    console.log(i);
}

console.log(`========================`);

for (x = 5; x <= 25; x += 4){
    console.log(x);
}

const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`
];

for (char of wizards){
    console.log(char);
}

console.log(`===================`);

let harryPotterMovies = [0]

while (harryPotterMovies < 8){
    // console.log(harryPotterMovies);
    harryPotterMovies++;
}

console.log(harryPotterMovies);

const hogwartHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

for (house of hogwartHouses){
    for (cha of house){
        console.log(cha);
    }
}

console.log(`==============`);

const quote = ["Yer", "A", "Wizard", "Harry"];

let magicQuote = ``;
for (i = 0; i < quote.length; i++){
    magicQuote = `${magicQuote} ${quote[i]}`;
}
magicQuote = magicQuote.trim();
console.log(magicQuote);

// let message = ``;
// for (word of quote){
//     message += ` ${word}`;
// }
// message = message.trim();
// console.log(message);

console.log(`============`);

for (i = 1; i <= 25; i ++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("Expecto Patronum");
    }else if (y % 3 === 0){
        console.log("Expecto");
    } else if (y % 5 === 0){
        console.log("Patronum");
    }else {
        console.log(y); 
    }
}

// for (y = 1; y <= 25; y++){
//     if (y % 3 === 0 && y % 5 === 0){
//         console.log("Expecto Patronum");
//     } else {
//         if (y % 3 === 0){
//             console.log("Expecto");
//         } else {
//             if (y % 5 === 0){
//                 console.log("Patronum");
//             }else {
//                 console.log(y);
//             }
//         }
//     }
// }