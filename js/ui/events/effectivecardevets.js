const playereffliste = document.getElementById("playereffliste");
import { findPlayr , setcapitan } from "../../utils/modalmanipulation/effctiveplayerservice.js";
import { showEffectif } from "../showeffective.js";


export function effectifCardEevnt(){
     playereffliste.addEventListener('click',(e)=>{
        const capitanbtn=e.target.closest('#capitan')
        if(capitanbtn){
           const number=capitanbtn.dataset.number
           const player=findPlayr(number)
           setcapitan(player)
          showEffectif()
        }else{return}
     })
}