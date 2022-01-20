console.log('js ok')
/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

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
let bike={};
let min=0;
const result=[];
for(let i =0; i<bikes.length; i++){
    bike=bikes[i];
    const {peso}=bikes[i];

    //trovare peso minore
    if(peso < bikes[min].peso){
        min=i;
    }
    console.log(bikes[min].peso)
}

console.log(bikes[min].peso,bikes[min].modello) 








