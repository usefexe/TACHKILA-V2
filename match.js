import { showMatch } from "./js/ui/showmatch.js";
import { searchMatch } from "./js/ui/events/searchadvinp.js";
import { filterMatch } from "./js/ui/events/filterMatch.js";
import { matchCardEvents } from "./js/ui/events/matchcardevents.js";
import { savematch } from "./js/ui/events/sauvgaredermatch.js";
import { fermerModalMatch } from "./js/ui/modaleedite.js";
import { AjouterMatch } from "./js/ui/events/ajoutermarchev.js";
import { confirmeDeleteModal } from "./js/ui/events/deletematchModal.js";
showMatch()
searchMatch()
filterMatch()
matchCardEvents()
document.getElementById("saveMatch").addEventListener("click", () => {
    savematch();
});

document.getElementById("cancelMatchModal").addEventListener("click", () => {
    fermerModalMatch();
});
AjouterMatch()
confirmeDeleteModal()