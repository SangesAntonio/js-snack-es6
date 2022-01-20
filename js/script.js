console.log('js ok')
/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
BONUS
Stampare in pagina oltre che in console!*/

//? Snack numero 1


//array di oggetti per le bici
const bikes=[
    {
        modello: 'cannondale',
        peso: 17,
    },
    {
        modello: 'pinarello',
        peso: 12,
    },
    {
        modello: 'scott',
        peso: 18,
    },
    {
        modello: 'trekk',
        peso: 14,
    }
]

//ciclare sulle bici

let min=0;
const result=[];
for(let i =0; i<bikes.length; i++){
    const {peso}=bikes[i];

    result.push(peso)
    
    
}
//trovare peso minore

min=Math.min(...result)
console.log(min) 






