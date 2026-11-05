import { mtchstate } from "../storage/localstorage.js";
const datematch=document.getElementById('matchDate')

const modal = document.getElementById("addMatchModal");
const matchAdversaire=document.getElementById('matchAdversaire')
const matchHeure=document.getElementById('matchHeure')
const matchLieu=document.getElementById('matchLieu')
const matchError = document.getElementById("matchError");


const txt=document.getElementById('text')

export function modaledite(match){
 txt.textContent='confirmation : le match modifier avec succes .'
        datematch.value = match.date
    matchAdversaire.value = match.adversaire
    matchHeure.value = match.heure
    matchLieu.value = match.lieu
document.querySelector(`input[name="matchType"][value="${match.domicile ? 'domicile' : 'exterieur'}"]`).checked = true
  
}

export function fermerModalMatch() {
    modal.classList.add("hidden");
    matchError.classList.add("hidden");
    matchError.textContent = "";
    mtchstate.matchToedit = null;
}
export function resetMtachaModal(){
    datematch.value=''
    matchAdversaire.value=''
    matchHeure.value=''
    matchLieu.value=''
    matchError.classList.add("hidden")
    document.querySelector(`input[name="matchType"][value='domicile']`).checked = false
document.querySelector(`input[name="matchType"][value='exterieur']`).checked = false
}