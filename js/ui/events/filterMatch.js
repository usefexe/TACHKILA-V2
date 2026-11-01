const playerFilters = document.getElementById("matchFilters");

import { mtchstate } from "../../storage/localstorage.js";
import { showMatch } from "../showmatch.js";

export function filterMatch() {

    playerFilters.addEventListener("click", (e) => {

        const button = e.target.closest("button[data-filter]");

        if (!button) return;

        mtchstate.filter = button.dataset.filter;

        playerFilters.querySelectorAll("button[data-filter]").forEach(btn => {

            btn.classList.remove("bg-green-600", "text-white");

            btn.classList.add(
                "bg-slate-900/50",
                "text-slate-300",
                "hover:bg-slate-800"
            );

        });

        button.classList.remove(
            "bg-slate-900/50",
            "text-slate-300",
            "hover:bg-slate-800"
        );

        button.classList.add("bg-green-600", "text-white");

        showMatch();

    });
}