// TODO 1-1 importez voituresElectriques du fichier voitures.js

import { voituresElectriques} from "./voitures.js";

// TODO 1-2 Créez la fonction ready
$( function () {


// TODO 1-3
//  - En jQuery, ajoutez l'entête du tableau (Marque, Modèle, Année, Couleur, Autonomie et Prix) à l'élément <table id="tableau-voitures"></table>
//  - Ajoutez l'élément tbody avec l'id = "voiture", sera utile au prochain TO-DO


// TODO 1-3
//  - En jQuery, ajoutez l'entête du tableau (Marque, Modèle, Année, Couleur, Autonomie et Prix) à l'élément <table id="tableau-voitures"></table>
//  - Ajoutez l'élément tbody avec l'id = "voiture", sera utile au prochain TO-DO


    const tableauTR = document.createElement("tr");
    const tableauTH = document.createElement("th");

    let table = document.getElementById()
// TODO 1-4 En jQuery, ajoutez dans le tbody de la table, les tr et les td pour afficher toutes les données importées du fichier voitures.js
//  avec un bouton "Supprimer", un bouton "Duppliquer" et un bouton "Ligne bleu" à la fin de la ligne.


// TODO 1-5
//  - En jQuery, ajoutez un événement lorsque l'on click sur un td du tableau  qui mettra en bleu le background-color. **
//  - En jQuery, ajoutez un événement lorsque l'on double-click sur un td du tableau qui mettra en vert le background-color. **
//  - **IMPORTANT, ces événements s'appliquent pas aux boutons "Supprimer" ni "Duppliquer" ni "Ligne Bleu"


// TODO 1-6
//  - En jQuery, ajoutez un événement sur le bouton "Supprimer" qui supprime la ligne au complet où se trouve le bouton cliqué.
//  - Ajoutez une animation de fadeOut sur la ligne supprimer.


// TODO 1-7
//  - En jQuery, ajoutez un événement sur le bouton "Duppliquer" qui va copier la ligne à la ligne suivante de la ligne cliqué.


// TODO 1-8
//  - En jQuery, ajoutez un événement sur le bouton "Ligne Bleu" qui va mettre la couleur de fond de la ligne en "lightBlue".


// TODO 1-9
//  - En jQuery, ajoutez un événement lorsque l'on clique sur le bouton Ajouter du formulaire qui permet d'ajouter les données du formulaire à la table
//  - Vous devez utilisez obligatoirement le FormData du formatif
//  - Vous devez valider l'année (entre 2015 et 2027 inclusivement), l'autonomie (plus grand que 100 km),
//    le prix (plus grand de 1000) et la couleur (BLANC, NOIR, BLEU, GRIS, ROUGE ou ARGENT) avant de les ajouter à la table


// TODO 1-10
//  - Ajoutez une animation (autre que le shake du formatif) de votre choix avec animate lorsqu'il y a une erreur de validation

})