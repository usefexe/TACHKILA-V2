const playereffliste = document.getElementById("playereffliste");
import {
    deleteplayer,
  findPlayr,
  setcapitan,
} from "../../utils/modalmanipulation/effctiveplayerservice.js";
import { showEffectif } from "../showeffective.js";
import { ouvrirEditEffective } from "../../utils/modalmanipulation/effectivemodal.js";
import { saveInlocalstorage } from "../../../effictif.js";
import { sauvegarderEditEffective } from "../../utils/modalmanipulation/effectivemodal.js";
import { fermerEditEffective  } from "../../utils/modalmanipulation/effectivemodal.js";
import { effstate, getPlayer } from "../../storage/localstorage.js";

const effectiveCloseEdit = document.getElementById("effectiveCloseEdit");
const effectiveCancelEdit = document.getElementById("effectiveCancelEdit");
const effectiveSaveEdit = document.getElementById("effectiveSaveEdit");
const deleteModal=document.getElementById('deleteModal')
const confirmedelete=document.getElementById('confirmDelete')
const deletealert=document.getElementById('deletealert')
const anullerdelete=document.getElementById('cancelDelete')

export function effectifCardEevnt() {
  playereffliste.addEventListener("click", (e) => {
    const capitanbtn = e.target.closest("#capitan");
    const editebtn = e.target.closest("#edite");
    const deletebtn=e.target.closest('#delete')
    if (capitanbtn) {
      const number = capitanbtn.dataset.number;
      const player = findPlayr(number);
      setcapitan(player);
      showEffectif();
      saveInlocalstorage();
    } else if (editebtn) {
      const number = editebtn.dataset.number;
      const player = findPlayr(number);

      if (player) {
        ouvrirEditEffective(player);
        effectiveCloseEdit.addEventListener("click", fermerEditEffective);

        effectiveCancelEdit.addEventListener("click", fermerEditEffective);

        effectiveSaveEdit.addEventListener("click", sauvegarderEditEffective);
      }

      return;
    } else if(deletebtn){
        const number = Number(deletebtn.dataset.number);
        
        const index = getPlayer.findIndex((el) => {
            return el.nubmer === number;
        });

        if (index !== -1) {
            effstate.playertodelete = index
            deleteModal.classList.remove("hidden")

        }
    }
    
    else  {
      return;
    }
  });

  confirmedelete.addEventListener('click', () => {
    deleteplayer(effstate.playertodelete)
    showEffectif()
    
    
    deleteModal.classList.add('hidden')
    deletealert.classList.remove('hidden')
    setTimeout(() => {
        deletealert.classList.add('hidden')
    }, 3000);
    effstate.playertodelete = null
   
})


anullerdelete.addEventListener("click", () => {
    deleteModal.classList.add('hidden')
    effstate.playertodelete = null
})

}
