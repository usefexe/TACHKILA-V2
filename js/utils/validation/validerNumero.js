import { getPlayer } from "../../storage/localstorage.js";
function validerNumero(number) {
    const numero = Number(number);

    if (!Number.isInteger(numero) || numero < 1 || numero > 99) {
        return false;
    }

    const existe = listBntouce.some((el) => {
        return el.nubmer == numero && el !== playerToEdit;
    });

    return !existe;
}

export {validerNumero}
