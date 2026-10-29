import { getPlayer } from "./storage/localstorage.js";
import { showPlayer } from "./ui/ShowPlayer.js";
import { showInlinup } from "./ui/Showplayerinlnlinup.js";
import { modalEvent } from "./ui/events/modalEvent.js";
import { PlaerListevents } from "./ui/events/playerListeevents.js";
let playerToEdit = null;
let playerListe=getPlayer
console.log(playerListe)
let playertodelete=null


function saveInlocalstorage() {
    localStorage.setItem("joueurs", JSON.stringify(playerListe))
}



modalEvent(playerListe )
console.log(playerListe)
showPlayer(playerListe)
showInlinup(playerListe)

PlaerListevents()

export {saveInlocalstorage,playerToEdit}