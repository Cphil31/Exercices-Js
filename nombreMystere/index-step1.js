
// Fonction principale

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'

function clickvalider(){
	var deux= $("#input").val();
			
			
		// Récupérer le contenu de mon input
			
		// Comparer ce contenu à un nombre que vous choisissez
			// Si le contenu est égal
			// Afficher une alert Gagné
if (deux==2){
	alert("Gagné");
}
			// Sinon,
			// Afficher une alert Perdu
else{
 alert("perdu");

}
							};

$("button").click(clickvalider);
	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus