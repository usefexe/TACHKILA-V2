const ajouterMatch=document.getElementById('ajouterMatch')
const txt=document.getElementById('text')
const maodal = document.getElementById("addMatchModal");
import { mtchstate } from "../../storage/localstorage.js";

export function  AjouterMatch(){
     ajouterMatch.addEventListener('click',()=>{
       
                 mtchstate.matchToedit=null
                  txt.textContent='confirmation : le match ajouter avec succes .'
                   maodal.classList.remove("hidden");
                 
                   maodal.querySelector("h2").textContent = "ajouter un match";
                   maodal.querySelector("#saveMatch").textContent = "Ajouter ";
     })
}