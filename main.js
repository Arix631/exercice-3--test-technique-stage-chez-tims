
// je crée une fonction qui va prendre pour argument une liste ici un tableau 
// je declare ma varible pivot qui va etre le premier element du tableau que je vais passer en argument
//je crée les pivots  ici des tableaux pour divier la liste
//je parcours ce tableau que je vais prendre en argument ,avec une boucle for je vais commencer a l'indice 1 j'exclu le pivot
// dans cette boucle for je verifie avec un if si la taille du tableau est superieur a ou egale a 2 et que le pivot est inferieur a la valeur de l'index i du tableau que je passe en argument
// si cette condition est vrai j'ajoute tout les elements du tableau dans le pivot de gauche (ici le tableau gauche)
// et je fait pareil pour l'autre tableau pour la droite 
// si tout est pas vrai ,ces a dire j'affiche en console.log("elle deja trié") ces que le tableau contient 0 a 1 element

function trie(tab1) {

    let pivot = tab1[0];
    let gauche = [];
    let droite = [];
    
    for ( let i = 1; i < tab1.length; i++) {

    
           if (tab1.length >= 2  && tab1[i] <= pivot) {
            gauche.unshift(tab1[i]);
            
            console.log(gauche);
        }
        else if (tab1[i] >= 2 && tab1[i] >= pivot) {

            droite.push(tab1[i]);
            console.log(droite);
        }
          else {
              console.log("elle est deja triée");

          }
    
       

}
  let  tab3 = gauche.concat(pivot,droite);
         console.log(tab3);
}
 trie([7, 5, 9, 78, 1, 5]);
 trie([5]);
