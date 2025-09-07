


function trie(tab1) {

    let pivot = tab1[0];
    let gauche = [];
    let droite = [];
    
    for ( let i = 1; i < tab1.length; i++) {
        if (tab1.length >= 2  && tab1[i] <= pivot) {
            gauche.unshift(tab1[i]);
            console.log(gauche);
        }
        else if (tab1.length >= 2 && tab1[i] >= pivot) {

            droite.push(tab1[i]);
            console.log(droite);
        }
         else {
             console.log("elle est deja triée");


         }
    
         const tab3 = gauche.concat(pivot,droite);
        console.log(tab3);
    }

}

 trie([7, 5, 9, 78, 1, 5]);
