// TODO 1-1 importez voituresElectriques du fichier voitures.js

import { voituresElectriques} from "./voitures.js";

// TODO 1-2 Créez la fonction ready
$( function () {
    
// TODO 1-3
//  - En jQuery, ajoutez l'entête du tableau (Marque, Modèle, Année, Couleur, Autonomie et Prix) à l'élément <table id="tableau-voitures"></table>
//  - Ajoutez l'élément tbody avec l'id = "voiture", sera utile au prochain TO-DO

    const tableauTitreEntete = ["Marque", "Modèle", "Année", "Couleur", "Autonomie", "Prix"];
    tableauTitreEntete.reverse();

    const tableauHead = $(document.createElement("thead"));
    $("#tableau-voitures").prepend(tableauHead);

    const tableauTR = $(document.createElement("tr"));
    tableauHead.prepend(tableauTR);

    for (let i = 0; i < tableauTitreEntete.length ; i++) {
        tableauTR.prepend(`<th>${tableauTitreEntete[i]}</th>`);
    }

// TODO 1-4 En jQuery, ajoutez dans le tbody de la table, les tr et les td pour afficher toutes les données importées du fichier voitures.js
//  avec un bouton "Supprimer", un bouton "Duppliquer" et un bouton "Ligne bleu" à la fin de la ligne.

    const tableauTitreData = ["marque", "modele", "annee", "couleur", "autonomie", "prix"];

    const tableauBody = $(document.createElement("tbody"));
    $(`#tableau-voitures`).append(tableauBody);

    for (let i = 0; i < voituresElectriques.length; i++) {
        const tableauTrBody = $(document.createElement("tr"));

        for (let j = 0; j < tableauTitreData.length; j++) {
            const tableauTd = $(document.createElement("td"));

            const cle = tableauTitreData[j];

            tableauTd.text(voituresElectriques[i][cle]);
            tableauTrBody.append(tableauTd)
        }
        tableauBody.append(tableauTrBody);
    }



// TODO 1-5
//  - En jQuery, ajoutez un événement lorsque l'on click sur un td du tableau  qui mettra en bleu le background-color. **
//  - En jQuery, ajoutez un événement lorsque l'on double-click sur un td du tableau qui mettra en vert le background-color. **
//  - **IMPORTANT, ces événements s'appliquent pas aux boutons "Supprimer" ni "Duppliquer" ni "Ligne Bleu"

    $("td").on("click", function () {
        $(this).css({backgroundColor : "blue"});
    });
    $("td").on("dblclick", function () {
        $(this).css({backgroundColor : "green"});
    });

// TODO 1-6
//  - En jQuery, ajoutez un événement sur le bouton "Supprimer" qui supprime la ligne au complet où se trouve le bouton cliqué.
//  - Ajoutez une animation de fadeOut sur la ligne supprimer.

    const boutonSupp = $(document.createElement("button"));
    boutonSupp.attr("type", "button");
    boutonSupp.text("Supprimer");

    const boutonDupp = $(document.createElement("button"));
    boutonDupp.attr("type", "button");
    boutonDupp.text("Duppliquer");

    const boutonLB = $(document.createElement("button"));
    boutonLB.attr("type", "button");
    boutonLB.text("Ligne Bleu");

    for (let i = 0; i < 1; i++) {
        const td = $(document.createElement("td"));
        td.append(boutonSupp);
        $("tr").append(td);

    }
    for (let i = 0; i < 1; i++) {
        const td = $(document.createElement("td"));
        td.append(boutonDupp);
        $("tr").append(td);

    }
    for (let i = 0; i < 1; i++) {
        const td = $(document.createElement("td"));
        td.append(boutonLB);
        $("tr").append(td);

    }

// TODO 1-7
//  - En jQuery, ajoutez un événement sur le bouton "Duppliquer" qui va copier la ligne à la ligne suivante de la ligne cliqué.


// TODO 1-8
//  - En jQuery, ajoutez un événement sur le bouton "Ligne Bleu" qui va mettre la couleur de fond de la ligne en "lightBlue".


// TODO 1-9
//  - En jQuery, ajoutez un événement lorsque l'on clique sur le bouton Ajouter du formulaire qui permet d'ajouter les données du formulaire à la table
//  - Vous devez utilisez obligatoirement le FormData du formatif
//  - Vous devez valider l'année (entre 2015 et 2027 inclusivement), l'autonomie (plus grand que 100 km),
//    le prix (plus grand de 1000) et la couleur (BLANC, NOIR, BLEU, GRIS, ROUGE ou ARGENT) avant de les ajouter à la table

    const form = document.getElementById("form-ajout-voiture")
    form.addEventListener("submit", submit);

    function submit(ev) {
        ev.preventDefault()

        const data = new FormData(form);
        const couleursAttendues = ["Blanc", "Noir", "Bleu", "Gris", "Rouge", "Argent"];
        let erreurs = false;
        let listeErreurs = [];

        if (data.get("annee") < 2015 || data.get("annee") > 2027) {
            listeErreurs.push("Erreur : L'année doit être entre 2015 et 2027");
            erreurs = true;
        }

        if (!couleursAttendues.includes(data.get("couleur"))) {
            listeErreurs.push("Erreur : La couleur doit être soit Blanc, Noir, Bleu, Gris, Rouge et Argent.");
            erreurs = true;
        }

        if (data.get("autonomie") <= 100) {
            //$("textarea[id='message-erreur']").value += "Erreur : l'autonomie doit être supérieure à 100km.";
            listeErreurs.push("Erreur : l'autonomie doit être supérieure à 100km.");
            erreurs = true;
        }

        if (data.get("prix") <= 1000) {
            listeErreurs.push("Erreur : le prix doit être supérieur à 1000 $.");
            erreurs = true;
        }

        if (erreurs) {
            $('#message-erreur').val(listeErreurs.join("\n"));
            ev.preventDefault();
        } else {
            let tabObj = {
                marque: data.get("brand"),
                modele: data.get("model"),
                annee: data.get("annee"),
                couleur: data.get("couleur"),
                autonomie: data.get("autonomie"),
                prix: data.get("prix")
            }

            const tableauTitreData = ["marque", "modele", "annee", "couleur", "autonomie", "prix"];

            const tableauTr = $(document.createElement("tr"));

            for (let j = 0; j < tableauTitreData.length; j++) {
                const tableauTd = $(document.createElement("td"));
                const cleCourrante = tableauTitreData[j];

                tableauTd.text(tabObj[cleCourrante]);
                tableauTr.append(tableauTd);
            }
            tableauBody.append(tableauTr);
        }

    }
// TODO 1-10
//  - Ajoutez une animation (autre que le shake du formatif) de votre choix avec animate lorsqu'il y a une erreur de validation

})