const serachinp = document.getElementById("searchPlayer")
import { showEffectif } from "../showeffective.js"
import { effstate } from "../../storage/localstorage.js"
import { check } from "./pagination.js"
import { refrchpagination } from "./pagination.js"
export function searchinput(){
    serachinp.addEventListener('input',(e)=>{
effstate.searchValue=e.target.value.trim()
effstate.currentpage=1
refrchpagination()
check()
showEffectif()
})
}