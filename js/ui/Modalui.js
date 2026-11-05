import {
  nameError,
  postError,
  numberError,
  playerNameInp,
  playerNumberInp,
  modale,
  playerAgeInp,
  playerStatusInp,
  ageError,
} from "../storage/htmldata.js";
import { state } from "../storage/localstorage.js";
function cacherErreurs() {
  nameError.classList.add("heading");
  postError.classList.add("heading");
  numberError.classList.add("heading");
  ageError.classList.add("heading");
}

function fermerModal() {
  modale.classList.add("heading");
  cacherErreurs();
}

function resetModal(selectedPost, playerToEdit) {
  playerNameInp.value = "";
  playerNumberInp.value = "";
  state.selectedPost = "";
  state.playerToEdit = null;
playerAgeInp.value = "";
playerStatusInp.value = "enforme";
}

export { cacherErreurs, fermerModal, resetModal };
