//!snack della lezione

/*Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.*/

//creao array
console.log('js ok')
const cars=[
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione:'benzina',
    },
    {
        marca: 'fiat',
        modello: 'fiorino',
        alimentazione:'metano',
    },
    {
        marca: 'alfaRomeo',
        modello: 'giulia',
        alimentazione:'benzina',
    },
    {
        marca: 'suzuky',
        modello: 'jimmy',
        alimentazione:'diesel',
    },
    {
        marca: 'fiat',
        modello: 'punto',
        alimentazione:'benzina',
    },
    {
        marca: 'wolkswagen',
        modello: 'golf',
        alimentazione:'diesel',
    },
    {
        marca: 'audi',
        modello: 'a3',
        alimentazione:'gpl',
    },
    {
        marca: 'audi',
        modello: 'a8',
        alimentazione:'diesel',
    },
    {
        marca: 'skoda',
        modello: 'yeti',
        alimentazione:'gpl',
    },
    {
        marca: 'fiat',
        modello: '500',
        alimentazione:'benzina',
    },
]
//divido le automobili in tre array diversi

const benzina= cars.filter((car)=>{
    if (car.alimentazione === 'benzina'){
        return true;
    }
    return false;
});

const diesel= cars.filter((car)=>{
    if (car.alimentazione === 'diesel'){
        return true;
    }
    return false;
});
const others= cars.filter((car)=>{
    if (car.alimentazione !== 'diesel' && car.alimentazione !=='benzina'){
        return true;
    }
    return false;
});


/*console.log(benzina)
console.log(diesel)
console.log(others)*/

/*A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]*/

const words = ['antonio','berlino','ALBINOLEFFE','trEno'];

const minWord=words.map((parola)=> {
    return parola.toLowerCase()
});
const UpWord=minWord.map((parola)=> {
    return parola.charAt(0).toUpperCase() + parola.substr(1) ;
});
console.log(UpWord) 

/*Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Crea un nuovo array con la lista dei mammiferi.*/

const animali=[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]

const animalClass=animali.filter((animale)=>{
    if (animale.classe ==='mammiferi'){
        return true
    }
    return false
})
console.log(animalClass)
