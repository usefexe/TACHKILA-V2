import { resetModal ,cacherErreurs} from "../../ui/Modalui.js";
import { modale ,positionParent ,saveModal,text} from "../../storage/htmldata.js";

function ouvrirAjout() {
    text.textContent = " confirmation : le jouer ajouter  secces."
    saveModal.textContent = "ajouter"
    resetModal();
    cacherErreurs();
    modale.classList.remove("heading");
    positionParent.querySelectorAll(".position").forEach(el => {
        el.classList.remove(
            "selected",
        );
    });
}
export {ouvrirAjout}