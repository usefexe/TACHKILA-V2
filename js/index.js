import { getPlayer } from "./storage/localstorage.js";
import { showPlayer } from "./ui/ShowPlayer.js";
import { showInlinup } from "./ui/Showplayerinlnlinup.js";
import { assignCcmposition } from "./ui/events/assignevent.js";
import { chnageEquipeComp } from "./ui/events/changeequicomp.js";
import { modalEvent } from "./ui/events/modalEvent.js";
import { PlaerListevents } from "./ui/events/playerListeevents.js";

let playerToEdit = null;
let playerListe=getPlayer


 

function saveInlocalstorage() {
    localStorage.setItem("joueurs", JSON.stringify(playerListe))
}



modalEvent(playerListe )

showPlayer(playerListe)
showInlinup(playerListe)

PlaerListevents()
chnageEquipeComp()
assignCcmposition()

export {saveInlocalstorage,playerToEdit}