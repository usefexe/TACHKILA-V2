import { getPlayer } from "./storage/localstorage.js";
import { showPlayer } from "./ui/ShowPlayer.js";
import { showInlinup } from "./ui/Showplayerinlnlinup.js";
import { modalEvent } from "./ui/events/modalEvent.js";
let playerToEdit = null;
let playerListe=getPlayer
let playertodelete=null


function saveInlocalstorage() {
    localStorage.setItem("joueurs", JSON.stringify(playerListe))
}



modalEvent(playerListe ,playertodelete,  playerToEdit)
console.log(playerListe)
showPlayer(playerListe)
showInlinup(playerListe)
modalEvent()


export {saveInlocalstorage}