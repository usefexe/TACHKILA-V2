 import { positionParent ,selectedPost , PlayerList , deleteModal } from "../../storage/htmldata.js";
 import { postError,ajouterbutton,xmodale , anuller , saveModal} from "../../storage/htmldata.js";
 import { ouvrirModification } from "../../utils/modalmanipulation/Edite.js";
 import { fermerModal } from "../Modalui.js";
 import { sauvegarderPlayer } from "../../utils/modalmanipulation/sauvgarderPlayer.js";

 function modalEvent(listBntouce,playertodelete,  playerToEdit){
    positionParent.addEventListener("click", (e) => {
    const btn = e.target.closest(".position");

    if (!btn || !positionParent.contains(btn)) return;

    selectedPost = btn.dataset.position;
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

        const index = listBntouce.findIndex((el) => {
            return el.nubmer === number;
        });

        if (index !== -1) {
            playertodelete = index
            deleteModal.classList.remove("heading")

        }

    } else if (editBtn) {
        const number = Number(editBtn.dataset.number);

        const player = listBntouce.find((el) => {
            return el.nubmer === number;
            
        });

        if (Player) {
            ouvrirModification(Player,playerToEdit);
        }
    }
});

ajouterbutton.addEventListener("click", ouvrirAjout);

xmodale.addEventListener("click", fermerModal);
anuller.addEventListener("click", fermerModal);

saveModal.addEventListener("click",(e)=>{sauvegarderPlayer(e,playerToEdit,listBntouce)} );
  
 }




 export {modalEvent}