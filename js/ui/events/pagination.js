const current = document.getElementById('currentPage')
const totalpage = document.getElementById('totalPages')
const nextPage=document.getElementById('nextPage')
const prevPage=document.getElementById('prevPage')
import { showEffectif } from "../showeffective.js"

import { getPlayer,effstate } from "../../storage/localstorage.js"
export function refrchpagination(){
current.textContent='1'
}
export function check() {
   
    let filteredPlayers = getPlayer.filter((el) => {

        const matchName = el.name.toLowerCase().includes(
            (effstate.searchValue || "").toLowerCase()
        );

        const matchPost = effstate.filtered === "ALL" ||
            el.post === effstate.filtered;

        return matchName && matchPost;
    });

    let ttpage = Math.ceil(filteredPlayers.length / 6);

    totalpage.textContent = ttpage;

    if (effstate.currentpage >= ttpage) {
        nextPage.disabled = true;
    } else {
        nextPage.disabled = false;
    }

    if (effstate.currentpage <= 1) {
        prevPage.disabled = true;
    } else {
        prevPage.disabled = false;
    }
}
export function pagiantion(){
  refrchpagination()
check()
  nextPage.addEventListener('click',()=>{
    effstate.currentpage++
current.textContent=effstate.currentpage
 check()
showEffectif()
   
  })
  prevPage.addEventListener('click',()=>{
    effstate.currentpage--
    current.textContent=effstate.currentpage
    check()
    showEffectif()
    
  })
  
}