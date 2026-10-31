import { cacherErreurs } from "../../ui/Modalui.js";
import {
  modale,
  positionParent,
  saveModal,
  text,
  playerNameInp,
  playerNumberInp,
  playerAgeInp,
  playerStatusInp,
} from "../../storage/htmldata.js";
import { state } from "../../storage/localstorage.js";
function ouvrirModification(player, playerToEdit) {
  saveModal.textContent = "modifier";

  state.playerToEdit = player; //
  text.textContent = "conffiramtion :joueuurs modifier avec seccues";

  playerNameInp.value = player.name;
  playerNumberInp.value = player.nubmer;
  playerAgeInp.value = player.age;
  playerStatusInp.value = player.status;
  state.selectedPost = player.post;

  positionParent.querySelectorAll(".position").forEach((el) => {
    el.classList.toggle("selected", el.dataset.position === player.post);
  });

  cacherErreurs();
  modale.classList.remove("heading");
}
export { ouvrirModification };
