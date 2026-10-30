const playerFilters = document.getElementById("playerFilters");
import { effstate } from "../../storage/localstorage.js";
 import { showEffectif } from "../showeffective.js";
import { refrchpagination } from "./pagination.js";
import { check } from "./pagination.js";
 export function playerFilter(){
    playerFilters.addEventListener("click", (e) => {
    const button = e.target.closest("button[data-filter]");

    if (!button) return;

    effstate.filtered = button.dataset.filter;
    effstate.currentpage=1
    refrchpagination()
    check()
   showEffectif()
    playerFilters.querySelectorAll("button[data-filter]").forEach(btn => {
        btn.classList.remove("bg-green-600", "text-white");
        btn.classList.add("text-slate-300", "hover:bg-slate-800");
    });

    button.classList.add("bg-green-600", "text-white");
    button.classList.remove("text-slate-300", "hover:bg-slate-800");
});}