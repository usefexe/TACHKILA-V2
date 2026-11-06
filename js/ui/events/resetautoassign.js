import { Reset ,autoassigned,restalert } from "../../storage/htmldata.js"
import { showInlinup } from "../Showplayerinlnlinup.js"
import { getPlayer } from "../../storage/localstorage.js"
  import { saveInlocalstorage } from "../../index.js";
import { showPlayer } from "../ShowPlayer.js"
import { postMatch } from "../../utils/logiquemetier/postmatch.js";

let listBntouce=getPlayer
export function resetAutoAssign(){
    Reset.addEventListener('click',()=>{
      listBntouce.forEach((el)=>{
        el.positoninlinup="libre"
     
        showInlinup()
        restalert.classList.remove('heading')
        setTimeout(() => {
            restalert.classList.add('heading')
        }, 3000);
      })
})


autoassigned.addEventListener('click',()=>{
     const postes = ["GB","LB","RB","CB1","CB2","LM","CM1","CM2","RM","ST1","ST2"];
    listBntouce.forEach((player) => {
        if (player.positoninlinup.toLowerCase() !== "libre") {
            return
        }
        const postDisponible = postes.find((poste) => {

            const dejaOccupe = listBntouce.some((el) => {
                return el.positoninlinup.toUpperCase() === poste;
            });
        
            return !dejaOccupe && postMatch(poste, player);
        });

      
        if (postDisponible) {
            player.positoninlinup = postDisponible;
        }

    })
  
      autoassignedmsg.classList.remove('heading')
        setTimeout(() => {
            autoassignedmsg.classList.add('heading')
        }, 3000);
      
    showInlinup()
    showPlayer()
    saveInlocalstorage()
})
}