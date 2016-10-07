		$(document).ready(main);
		
		function main(){
			
			var recuprompt;
			alert("Devine le chiffre mystère");
			var mystere;
			var valeurmin;
			var valeurmax;

			function reset (){
					recuprompt= prompt("Nombre de tentatives");
					valeurmin= prompt ("Choisi ta valeur minimale ")
					valeurmax= prompt ("Choisi ta valeur maximale ")
					mystere= Math.round(Math.random() * (valeurmax - valeurmin) + 1);
					$(".count").text(recuprompt);
					console.log(mystere);
			}
			console.log (reset);

			function clickvalider(){
				var selectname=$("#nom").val();
				console.log(selectname);


				if (selectname==mystere){	
					alert("Gagné ");
					reset();
				}


				else if (selectname>mystere) {
					alert("Perdu, votre nombre est trop grand !");
					recuprompt--;
					$(".count").text(recuprompt);
				}


				else if (selectname<mystere) {
					alert("Perdu, votre nombre est trop petit !");
					recuprompt--;
					$(".count").text(recuprompt);
				}

				if (recuprompt==0){
					alert("Perdu, Recommence !");
					reset();
				}



								} 

			$("#valider").click(clickvalider);
			reset();
		}


		function valeursminmax() {

		}

		valeursminmax ();

		//* Avant de commencer, choisir les valeurs minimale et maximale du nombre que l'ordinateur va choisir.
			// Créer et initialiser une variable 'globale' qui 
			// va stocker le nombre de tentatives restantes.



			// Créer et initialiser une variable 'globale' qui 
			// va stocker le nombre "aléatoire" mystère.
			// == Fonction clickValider == 
			// Créer la fonction 'clickvalider'

				// Récupérer le contenu de mon input


				// Comparer ce contenu au nombre mystère.
					/*
						Si le contenu est égal : 
						- afficher une alert Gagné
						- démarrer une nouvelle partie
						*/

						

					// Sinon s'il est supérieur
					// Afficher une alert Perdu, votre nombre est trop grand
					
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

				//## Step 4
		//* Avant de commencer, donner la possiblité de choisir le nombre de tentatives
		