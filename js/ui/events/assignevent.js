const assignComposition = document.getElementById("assignComposition");
import { effstate, getPlayer, savematchlocalstr } from "../../storage/localstorage.js";
import { showAssignSuccess } from "./assignsucsses.js";

import { findMatch } from "../../utils/matchservice.js";
export function assignCcmposition() {
  assignComposition.addEventListener("click", () => {
     const match = findMatch(effstate.marchtoassign);
      const linup = [];
    if (effstate.marchtoassign) {
     
      for (let i = 0; i < getPlayer.length; i++) {
        if (getPlayer[i].positoninlinup !== "libre") {
          const player = {
            name: getPlayer[i].name,
            position: getPlayer[i].positoninlinup,
            number: getPlayer[i].nubmer,
          };
          linup.push(player);
        }
      }
    }
    match.composition=linup
    savematchlocalstr()
    showAssignSuccess()
  });
}
