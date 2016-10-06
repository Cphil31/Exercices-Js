$(document).ready(main);

// Fonction principale
		function main(){
	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre de tentatives restantes.
		
		var decompter=3;
		var vie=$('#vies');
	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre "aléatoire" mystère.
	var mystere=Math.round(Math.random() * 9  + 1);
	console.log(mystere);	
	// == Fonction clickValider == 
	// Créer la fonction 'clickvalider'
		function clickvalider(){
			var selectname=$("#nom").val();
				

		// Récupérer le contenu de mon input


		// Comparer ce contenu au nombre mystère.
			/*
				Si le contenu est égal : 
				- afficher une alert Gagné
				- démarrer une nouvelle partie
			*/
			
			if (selectname==mystere){

				alert("Gagné !!!");
			}
				

			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand
			if (selectname>mystere) {
				alert("Perdu, votre nombre est trop grand !");
				decompter--;
				$(".count").text(decompter);
			
			}
			
			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit
			if (selectname<mystere) {
				alert("Perdu, votre nombre est trop petit !");
				decompter--;
				$(".count").text(decompter);
			}
			
			// Dans les cas où c'est perdu, diminuer le nombre de tentatives
			if(selectname>mystere || selectname<mystere){
			;
			} 
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
			}

	$("#valider").click(clickvalider);
	
}


	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus


	/*
		Concernant la 'refactorisation' : 
		- créer une fonction 'demarrerPartie'
		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
	*/

	function demarrerPartie() {}
	function partieGagnee () {}
	function partiePerdue() {}
