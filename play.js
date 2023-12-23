const prompt = require ("prompt-sync")();
console.log("-------JEU DE CARTE-------");
console.log(" --------1.Jouer--------- ");
console.log(" --------2.Règle--------- ");
console.log("--------3.Quitter---------");

let a = +prompt("Veulliez entrer votre choix: ");
switch(a){
    case 1:
        console.log("Bienvenue dans le jeu");
        let scoreJoueur = 0;
        let scoreIA = 0;
        for (let i = 0; i < 3; i++){
            let table = ["feu", "eau", "plante"];
            let joueur = prompt ("*Entrer votre choix (feu, eau, plante): ");
            let IA = table[Math.floor(Math.random() * table.length)];
            console.log("Joueur: "+ joueur +" VS IA: " +IA);
            if(
                (joueur === "feu" && IA === "plante") || (joueur === "plante" && IA === "eau") || (joueur === "eau" && IA === "feu")
            ){
                 scoreJoueur++;
                console.log("   =>Le joueur remporte la manche");
                console.log("   =>Score du joueur= " + scoreJoueur + " et score de l'IA= " + scoreIA);
            }
            else if (joueur === IA){
                console.log("Il y a égalité");
                console.log("Score du joueur= " + scoreJoueur + " et score de l'IA= " + scoreIA);
            }
            else{
                scoreIA++;
                console.log("   =>L'IA remporte cette manche");
                console.log("   =>Score du joueur= " + scoreJoueur + " et score de l'IA= " + scoreIA);
            }

            }
            console.log("                  *------*RESULTAT FINAL*------*");
            if(scoreJoueur > scoreIA){
                console.log("Félicitation! Le joueur l'emporte avec le score de " + scoreJoueur + " à " + scoreIA);
            }
            else if(scoreJoueur === scoreIA){
                console.log("Match nul");
            }
            else{
                console.log("L'IA l'emporte avec un score de " + scoreIA + " à " + scoreJoueur +", vous ferez mieux la prochaine fois");
            }
            break;
            case 2:
                console.log("Vous allez jouer trois manches de jeu de carte contre un IA");
                console.log("Toutes les cartes seront réutilisables à chaque manche")
                console.log("Vous cartes sont :");
                console.log("1.feu      2.eau       3.plante");
                console.log("Dominance des cartes :");
                console.log("feu < eau ");
                console.log("eau < plante ");
                console.log("plante < feu ");
                break;
            case 3:
                console.log("A la prochaine!");
                break;    
            case 4:
                console.log("Veuillez choisir entre les menus proposés");       

}
