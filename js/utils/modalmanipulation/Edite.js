import { cacherErreurs} from "../../ui/Modalui.js";
import { modale ,positionParent ,saveModal,text ,playerNameInp , playerNumberInp , selectedPost} from "../../storage/htmldata.js";

function ouvrirModification(player) {
    saveModal.textContent = "modifier"

    playerToEdit = player;//
    text.textContent = "conffiramtion :joueuurs modifier avec seccues"

    playerNameInp.value = player.name;
    playerNumberInp.value = player.nubmer;

    selectedPost = player.post;

    positionParent.querySelectorAll(".position").forEach(el => {
        el.classList.toggle(
            "selected",
            el.dataset.position === player.post
        );
    });

    cacherErreurs();
    modale.classList.remove("heading");
}
export {ouvrirModification}