//Tic Tac Toe
var tour = 1

function ChangerImage(element) {
    // Condition pour établir les 9 possiblités dans lesquels la partie s'arrête
    var condition = document.getElementById("q1").src==document.getElementById("q2").src && document.getElementById("q2").src==document.getElementById("q3").src && !(getImageFileName(document.getElementById("q3").src) == "Vide.png");
    condition = condition || document.getElementById("q4").src==document.getElementById("q5").src && document.getElementById("q5").src==document.getElementById("q6").src && !(getImageFileName(document.getElementById("q6").src) == "Vide.png");
    condition = condition || document.getElementById("q7").src==document.getElementById("q8").src && document.getElementById("q8").src==document.getElementById("q9").src && !(getImageFileName(document.getElementById("q9").src) == "Vide.png");
    condition = condition || document.getElementById("q1").src==document.getElementById("q4").src && document.getElementById("q4").src==document.getElementById("q7").src && !(getImageFileName(document.getElementById("q7").src) == "Vide.png");
    condition = condition || document.getElementById("q2").src==document.getElementById("q5").src && document.getElementById("q5").src==document.getElementById("q8").src && !(getImageFileName(document.getElementById("q8").src) == "Vide.png");
    condition = condition || document.getElementById("q3").src==document.getElementById("q6").src && document.getElementById("q6").src==document.getElementById("q9").src && !(getImageFileName(document.getElementById("q9").src) == "Vide.png");
    condition = condition || document.getElementById("q1").src==document.getElementById("q5").src && document.getElementById("q5").src==document.getElementById("q9").src && !(getImageFileName(document.getElementById("q9").src) == "Vide.png");
    condition = condition || document.getElementById("q3").src==document.getElementById("q5").src && document.getElementById("q5").src==document.getElementById("q7").src && !(getImageFileName(document.getElementById("q7").src) == "Vide.png");;
    condition = condition || tour==10

    if (!condition && getImageFileName(document.getElementById(element.id).src) == "Vide.png"){
        if (tour%2==1){
            document.getElementById(element.id).src = 'Joueur1.png';
        };
        if (tour%2==0){
            document.getElementById(element.id).src = 'Joueur2.png';
        };
        document.getElementById('b2').textContent = "C'est au tour du joueur " + (tour%2 + 1) + " de jouer."
        tour = tour + 1
    } 
    if (condition){
        document.getElementById('b2').textContent = "Partie terminé !"
    }
};

// Extraire le nom du fichier à partir du chemin complet
function getImageFileName(src) {
    return src.substring(src.lastIndexOf('/') + 1);
}