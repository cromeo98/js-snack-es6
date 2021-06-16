// Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bicycles = [
    {
        name: 'mountain bike',
        weigth: 20
    },
    {
        name: 'lightbike',
        weigth: 5
    },
    {
        name: 'heavybike',
        weigth: 30
    }
];

let weigthMin = bicycles[0].weigth;

for(let i = 1; i < bicycles.length; i++){
    if(bicycles[i].weigth < weigthMin){
        weigthMin = bicycles[i].weigth;
    }
}

console.log(weigthMin);