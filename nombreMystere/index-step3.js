$(document).ready(main);

// Fonction principale
		function main(){
	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre de tentatives restantes.
		var tentatives=$(vies).val ();
	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre "aléatoire" mystère.
	function mystere(){
		Math.round(Math.random() * (9  + 1));
	}
		var globale= $(mystere).val();
	


	$("#valider").click(clickValider);
	console.log(mystere);


	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
		function clickValider(){
	console.log("valider");
			}

		// Récupérer le contenu de mon input
		var recupinput=$("#nom").val();
		console.log("contenu récupéré");


		// Comparer ce contenu au nombre mystère.
			/*
				Si le contenu est égal : 
				- afficher une alert Gagné
				- démarrer une nouvelle partie
			*/
			if (recupinput===mystere){
				alert("Gagné !!!");
			}
				console.log("le contenu est égal");

			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand
			if (recupinput>mystere) {
				alert("Perdu !!!");
			}
			console.log("le contenu est supérieur");
			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit

			// Dans les cas où c'est perdu, diminuer le nombre de tentatives

			// Actualiser la zone html affichant le nombre de tentatives

			/* 
				Si le nb de tentatives est égal à 0,
			 	la partie est perdue :
			 	- afficher que c'est perdu
			 	- démarrer une nouvelle partie
			 		+ remettre le nombre de tentatives à sa valeur initiale
			 		+ générer un nouveau nombre mystère
			 */
			
	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus


	/*
		Concernant la 'refactorisation' : 
		- créer une fonction 'demarrerPartie'
		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
	*/
}