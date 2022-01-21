/*SNACK 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe.
*/

console.log('js ok');

//!funzione
const getElements =(array, min, max)=>{
    const newArray=array.filter((item)=>{
        if(item > min && item < max){
            return true;
        }
        return false;
    })
    return newArray
}
//array

const oggetti = ['anguria', 'pinguino', 'umbria','lecce', 'fotocamera', 'albero', 'cubo'];

newArray = getElements(oggetti,2,6);

console.log(newArray);
