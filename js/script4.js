/*SNACK 4
Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
ES (marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
BONUS  nei nomi sulle targhe l'iniziale di ogni parola deve essere maiuscola
ES.: (marco de iulio  => Marco De Iulio)*/

const students =[
    {
        id: '00276',
        nome: 'rosa',
        totaleVoti: '80'
    },
    {
        id: '00156',
        nome: 'akira',
        totaleVoti: '65'
    },
    {
        id: '00856',
        nome: 'mario',
        totaleVoti: '92'
    },
    {
        id: '00365',
        nome: 'raffaella',
        totaleVoti: '45'
    },
    {
        id: '00745',
        nome: 'renato',
        totaleVoti: '58'
    },
]

//creo lista dei nomi con iniziale in maiuscolo
const upperletter=students.map((studente)=> {
    return studente.nome.charAt(0).toUpperCase() + studente.nome.substr(1)
});
console.log(upperletter);

//creo nuovo array con metodo filter per gli studenti con voti sopra il 70
const over70 = students.filter((studente)=>{
    
})