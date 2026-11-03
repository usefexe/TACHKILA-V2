const matchAdversaire = document.getElementById("matchAdversaire");
const matchLieu = document.getElementById("matchLieu");
const matchError = document.getElementById("matchError");
      
export function validationMatch() {

    const adversaire = matchAdversaire.value.trim();
  
    const heure = matchHeure.value;
    const lieu = matchLieu.value.trim();

    const domicile = document.querySelector(
        'input[name="matchType"]:checked'
    );

    matchError.classList.add("hidden");
    matchError.textContent = "";

    if (!adversaire) {
        matchError.textContent = "Veuillez saisir le nom de l'adversaire.";
    }
  
    else if (!heure) {
        matchError.textContent = "Veuillez choisir une heure.";
    }
    else if (!lieu.trim()) {
        matchError.textContent = "Veuillez saisir le lieu du match.";
    }
    else if (!domicile) {
        matchError.textContent = "Veuillez choisir le type de match.";
    }
    else {
        return true;
    }

    matchError.classList.remove("hidden");
    return false;
}