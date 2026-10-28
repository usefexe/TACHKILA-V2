   import { validerFormulaire } from "../validation/validateformilaire.js";
   import { playerNumberInp , playerNameInp , selectedPost } from "../../storage/htmldata.js";
   import { showInlinup } from "../../ui/Showplayerinlnlinup.js";
   import { showPlayer } from "../../ui/ShowPlayer.js";
import { fermerModal } from "../../ui/Modalui.js";
import { resetModal } from "../../ui/Modalui.js";
import { saveInlocalstorage } from "../../index.js";

   
   function sauvegarderPlayer(e,playerToEdit,listBntouce) {
    e.preventDefault();

    if (!validerFormulaire()) return;

    const newPlayer = {
        name: playerNameInp.value.trim(),
        nubmer: Number(playerNumberInp.value),
        post: selectedPost,
        inlineup: false,
        positoninlinup: "libre"

    };

    if (playerToEdit) {

        playerToEdit.name = newPlayer.name;
        playerToEdit.nubmer = newPlayer.nubmer;
        if (playerToEdit.post !== newPlayer.post) {
            playerToEdit.positoninlinup = 'libre'
            showInlinup()
        }
        playerToEdit.post = newPlayer.post;
        saveInlocalstorage()
        showInlinup()


    } else {

        listBntouce.push(newPlayer);
        saveInlocalstorage()
    }

    showPlayer();

    fermerModal();
    resetModal();

    success.classList.remove("heading");

    setTimeout(() => {
        success.classList.add("heading");
    }, 3000);
}

export {sauvegarderPlayer}