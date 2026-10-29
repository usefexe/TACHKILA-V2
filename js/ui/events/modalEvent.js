 import { positionParent  , PlayerList , deleteModal } from "../../storage/htmldata.js";
 import { postError,ajouterbutton,xmodale , anuller , saveModal ,anullerdelete , confirmedelete ,deletealert} from "../../storage/htmldata.js";
 import { ouvrirModification } from "../../utils/modalmanipulation/Edite.js";
 import { fermerModal } from "../Modalui.js";
 import { sauvegarderPlayer } from "../../utils/modalmanipulation/sauvgarderPlayer.js";
 import { ouvrirAjout } from "../../utils/modalmanipulation/Ajoute.js";
 import { getPlayer } from "../../storage/localstorage.js";
 import { state } from "../../storage/localstorage.js";
 import { showInlinup } from "../Showplayerinlnlinup.js";
import { showPlayer } from "../ShowPlayer.js";
import { saveInlocalstorage } from "../../index.js";
 const listread=getPlayer
 let playertodelete= null
 
    
 function modalEvent(listBntouce){

    positionParent.addEventListener("click", (e) => {
    const btn = e.target.closest(".position");

    if (!btn || !positionParent.contains(btn)) return;

    state.selectedPost = btn.dataset.position;
    positionParent.querySelectorAll(".position").forEach(el => {
        el.classList.remove(
            "selected",

        );
    });
    btn.classList.add("selected");

    postError.classList.add("heading");
});




PlayerList.addEventListener("click", (e) => {
    const deleteBtn = e.target.closest("#deleteplayer");
    const editBtn = e.target.closest("#modifierplayer");

    if (deleteBtn) {
        const number = Number(deleteBtn.dataset.number);
        
        const index = listread.findIndex((el) => {
            return el.nubmer === number;
        });

        if (index !== -1) {
            playertodelete = index
            deleteModal.classList.remove("heading")

        }

    } else if (editBtn) {
        const number = Number(editBtn.dataset.number);

        const player = listread.find((el) => {
            return el.nubmer === number;
            
        });

        if (player) {
            ouvrirModification(player);
        }
    }


});


confirmedelete.addEventListener('click', () => {
    listBntouce.splice(playertodelete, 1);
    showPlayer();
    showInlinup()
    saveInlocalstorage()
    deleteModal.classList.add('heading')
    deletealert.classList.remove('heading')
    setTimeout(() => {
        deletealert.classList.add('heading')
    }, 3000);
    playerToEdit = null
    ()
})


anullerdelete.addEventListener("click", () => {
    deleteModal.classList.add('heading')
    playerToEdit = null
})


ajouterbutton.addEventListener("click", ouvrirAjout);

xmodale.addEventListener("click", fermerModal);
anuller.addEventListener("click", fermerModal);

saveModal.addEventListener("click",(e)=>{sauvegarderPlayer(e,listBntouce)} );
  
 }




 export {modalEvent}