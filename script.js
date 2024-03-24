//Tic Tac Toe
var tour = 1
function ChangerImage(element) {
    if (tour%2==1){
        document.getElementById(element.id).src = 'Joueur1.png';
    };
    if (tour%2==0){
        document.getElementById(element.id).src = 'Joueur2.png';
    };
    document.getElementById('b2').textContent = "C'est au tour du joueur " + (tour%2 + 1) + " de jouer."
    tour = tour + 1
}