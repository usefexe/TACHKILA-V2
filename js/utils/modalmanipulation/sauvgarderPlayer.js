import { validerFormulaire } from "../validation/validateformilaire.js";
import {
  playerNumberInp,
  playerNameInp,
  success,
  playerAgeInp,
  playerStatusInp,
} from "../../storage/htmldata.js";
import { showInlinup } from "../../ui/Showplayerinlnlinup.js";
import { showPlayer } from "../../ui/ShowPlayer.js";
import { fermerModal } from "../../ui/Modalui.js";
import { resetModal } from "../../ui/Modalui.js";
import { saveInlocalstorage } from "../../index.js";
import { state } from "../../storage/localstorage.js";
import { createPlayer } from "./playersevice.js";
import { editePlayer } from "./playersevice.js";

function sauvegarderPlayer(e, listBntouce) {
  e.preventDefault();

  if (!validerFormulaire(state.playerToEdit)) return;

  const newPlayer = createPlayer(
    playerNameInp,
    playerNumberInp,
    state.selectedPost,
      playerAgeInp,
    playerStatusInp
  );

  if (state.playerToEdit) {
    editePlayer(state.playerToEdit, newPlayer);
    saveInlocalstorage();
    showInlinup();
  } else {
    listBntouce.push(newPlayer);
    saveInlocalstorage();
  }

  showPlayer();

  fermerModal();
  resetModal();

  success.classList.remove("heading");

  setTimeout(() => {
    success.classList.add("heading");
  }, 3000);
}

export { sauvegarderPlayer };
