$(document).ready(pied);
// Fonction principale
function pied(){

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
function ClickValider (){

		// Récupérer le contenu de mon input

var recup= $("#name").val();
console.log(recup);
		// Stocker un nombre ENTIER généré "aléatoirement"
		/**
 
 * Retourne un nombre ENTIER au hasard entre min et max!
 */

   var random= Math.round(Math.random() * (9  + 1));

		console.log(random);



		// Comparer ce contenu à ce nombre
			// Si le contenu est égal
			// Afficher une alert Gagné
			
if (recup===random){
alert("Gagné !!!");
}
			
			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand
if (recup>random){
alert("Perdu  !!!");
}			

			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit
		if (recup<random){
alert("Perdu  !!!");
}	
	// /Fin == Fonction clickValider == 

	}

	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus
	
$("#valid").click(ClickValider);
}