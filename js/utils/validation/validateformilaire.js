import { validerNumero } from "./validerNumero.js";
import { validerNom } from "./validerNom.js";
import {
  numberError,
  nameError,
  postError,
  playerNumberInp,
  playerNameInp,
  playerAgeInp,
  ageError,
} from "../../storage/htmldata.js";

import { state } from "../../storage/localstorage.js";

function validerFormulaire() {
  let valide = true;

  const age = Number(playerAgeInp.value);

if (!Number.isInteger(age) || age < 18 || age > 39) {
    ageError.classList.remove("heading");
    valide = false;
} else {
    ageError.classList.add("heading");
}

  if (!validerNom(playerNameInp.value)) {
    nameError.classList.remove("heading");
    valide = false;
  } else {
    nameError.classList.add("heading");
  }

  if (!validerNumero(playerNumberInp.value, state.playerToEdit)) {
    numberError.classList.remove("heading");
    valide = false;
  } else {
    numberError.classList.add("heading");
  }

  if (!state.selectedPost) {
    postError.classList.remove("heading");
    valide = false;
  } else {
    postError.classList.add("heading");
  }

  return valide;
}
export { validerFormulaire };
