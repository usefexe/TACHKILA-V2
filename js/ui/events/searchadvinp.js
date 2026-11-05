const serachinp = document.getElementById("searchMatch")

import { mtchstate } from "../../storage/localstorage.js"
import { showMatch } from "../showmatch.js"

export function searchMatch(){
    serachinp.addEventListener('input',(e)=>{
mtchstate.serchinp=e.target.value.trim()

showMatch()

})
}