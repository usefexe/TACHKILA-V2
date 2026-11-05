const matchCrads = document.getElementById("matchlsit");
import { mtchstate ,matchs} from "../../storage/localstorage.js";
import { findMatch } from "../../utils/matchservice.js";
import { modaledite } from "../modaleedite.js";
import { matchScore } from "./MatchScore.js";
const deleteModal=document.getElementById('deleteModal')

const maodal = document.getElementById("addMatchModal");
export function matchCardEvents() {
    matchCrads.addEventListener("click",  (e) => {
        const editebtn = e.target.closest(".modifierMatch");
        const deletebtn=e.target.closest("#suprimerMatch");
        const scorebtn=e.target.closest('#score')
        if (editebtn) {
            mtchstate.matchToedit = findMatch(editebtn.dataset.id);

            modaledite(mtchstate.matchToedit);
           
            maodal.classList.remove("hidden");
          
            maodal.querySelector("h2").textContent = "Modifier les infos du match";
            maodal.querySelector("#saveMatch").textContent = "Modifier";
        }else if(deletebtn){
          mtchstate.playertodelete=matchs.findIndex(el=>{
            return el.id=deletebtn.dataset.id
            
          })
          deleteModal.classList.remove('hidden')
        }else if(scorebtn){
          const id = scorebtn.dataset.id
        
         matchScore(id)
        }
        
        else{
          return
        }
    });
}