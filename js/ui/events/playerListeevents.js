import { PlayerList } from "../../storage/htmldata.js";
import { findPlayr } from "../../utils/modalmanipulation/playersevice.js";
import { showPlayer } from "../ShowPlayer.js";
import { changerPost } from "../../utils/modalmanipulation/playersevice.js";
export function PlaerListevents(){
    PlayerList.addEventListener('change', (e) => {
    const chngerposition = e.target.closest("#positionchange")
    if (chngerposition) {

        let number = chngerposition.dataset.number
        const player = findPlayr(number)
        const postchoix = chngerposition.value
        changerPost(player, postchoix)
    } else {
        return
    }
}
)
showPlayer()

}