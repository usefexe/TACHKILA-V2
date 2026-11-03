import { mtchstate ,matchs } from "../../storage/localstorage.js";
import { validationMatch } from "../../utils/validation/validationmatchform.js";
import { fermerModalMatch } from "../modaleedite.js";
import { showMatch } from "../showmatch.js";
import { savematchlocalstr } from "../../storage/localstorage.js";
const matchAdversaire = document.getElementById("matchAdversaire");
const matchDate = document.getElementById("matchDate");
const matchHeure = document.getElementById("matchHeure");
const matchLieu = document.getElementById("matchLieu");
const succes=document.getElementById('sucssec')
export function savematch() {
    if (!validationMatch()) return;
   
    const data = {
        id:Date.now(),
        adversaire: matchAdversaire.value.trim(),
        butsAtlas :null,
      butsAdversaire :null,
        date: matchDate.value,
        heure: matchHeure.value,
        lieu: matchLieu.value.trim(),
        domicile: document.querySelector(
            'input[name="matchType"]:checked'
        ).value === "domicile",
          composition:[],
    };

    if (mtchstate.matchToedit) {
        data.id=mtchstate.matchToedit.id,
         data.butsAtlas=mtchstate.matchToedit.butsAtlas,
         data.butsAdversaire=mtchstate.matchToedit.butsAdversaire,
         
        data.composition=mtchstate.matchToedit.composition
        Object.assign(mtchstate.matchToedit, data);
         succes.classList.remove('hidden')
         setTimeout(()=>{
        succes.classList.add('hidden')
         },3000)
         savematchlocalstr()
    } else {
        matchs.push(data)
        savematchlocalstr()
    }
     
    showMatch();
    fermerModalMatch();
}