// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (Utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti. Stampiamo tutto in console.
const teams = [
    {
        nome: 'Milan',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Inter',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Juventus',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Roma',
        punti: 0,
        falli: 0
    }
];

const generateRandomPts = () => Math.floor(Math.random() * (50 - 0 + 1) ) + 0;
const generateRandomFouls = () => Math.floor(Math.random() * (80 - 20 + 1) ) + 20;

// sostituzione n. random 1
for(let i = 0; i < teams.length; i++){
    teams[i].punti = generateRandomPts();
    teams[i].falli = generateRandomFouls();
}

// sostituzione n. random 2
// for(let i = 0; i < teams.length; i++){
//     for(let k in teams[i]){
//         if(k == 'punti'){
//             teams[i][k] = generateRandomPts();
//         } else if(k == 'falli'){
//             teams[i][k] = generateRandomFouls();
//         }
//     }
// }

// soluzione 1
for (const{nome: n, falli: f} of teams){
    console.log(n + f);
}
