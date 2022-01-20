/*Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
BONUS
Stampare in pagina oltre che in console!*/
console.log('js ok');



//!funzioni
const getRandomNumber=(min,max) => {
    const number=Math.floor(Math.random() *(max-min +1)+min);
    return number;
}

//array squadre
const teams=[
    {
        nome:'Napoli',
        puntiFatti:0,
        falliSubiti:0,
    },
    {
        nome:'inter',
        puntiFatti:0,
        falliSubiti:0,
    },
    {
        nome:'Roma',
        puntiFatti:0,
        falliSubiti:0,
    },
    {
        nome:'Udinese',
        puntiFatti:0,
        falliSubiti:0,
    },
]

