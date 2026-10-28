import { validerNumero } from "./validerNumero.js";
import { validerNom } from "./validerNom.js";
import { numberError , nameError , postError,  playerNumberInp , playerNameInp } from "../../storage/htmldata.js";
function validerFormulaire() {
    let valide = true;

    if (!validerNom(playerNameInp.value)) {
        nameError.classList.remove("heading");
        valide = false;
    } else {
        nameError.classList.add("heading");
    }

    if (!validerNumero(playerNumberInp.value)) {
        numberError.classList.remove("heading");
        valide = false;
    } else {
        numberError.classList.add("heading");
    }

    if (!selectedPost) {
        postError.classList.remove("heading");
        valide = false;
    } else {
        postError.classList.add("heading");
    }

    return valide;
}
export {validerFormulaire}
