
import { countplayer,PlayerList } from "../storage/htmldata.js"
import { getPlayer } from "../storage/localstorage.js"

let listBntouce=getPlayer
function showPlayer() {
                function dejaOccupe (post)
                
                { const dj=listBntouce.some((el) => {
                return el.positoninlinup === post;
            });
        return dj}
    PlayerList.innerHTML = ""
    countplayer.textContent = `${listBntouce.length} Joueurs`
    let Tshirt = ""
    let cardcolor = ""
    listBntouce.forEach(el => {
        if (el.post === "GK") {
            Tshirt = "../imgs/gk.png"
        }
        else if (el.post === "CB" || el.post === "LB" || el.post === "RB") {
            Tshirt = "../imgs/def.png"
        } else if (el.post === "CM") {
            Tshirt = "../imgs/mid.png"
        } else {
            Tshirt = "../imgs/att.png"
        }
       
        const playercard = document.createElement("li")
   if (el.status === "blese") {
    playercard.classList.add("opacity-50", "cursor-not-allowed");

    
}
        playercard.draggable = el.status === "enforme";
        playercard.classList.add("playercardliste")
        const twclass = "flex p-2 border-b-1 border-sky-400 flex shrink-0 p-2 border-b-1 border-sky-400 max-lg:min-w-[260px] max-lg:border-b-0 max-lg:border-r-1 max-lg:h-13"
        twclass.split(" ").forEach(el => {
            playercard.classList.add(el)
        });

        playercard.insertAdjacentHTML("beforeend", `
        <button class="max-lg:h-10 ">
                        <div
                            class="gk  bg w-8 h-8 bg-[url(${Tshirt})] bg-cover bg-center bg-no-repeat  pt-2 text-slate-200 font-bold text-sm " id="number">
                            ${el.nubmer}</div>
                    </button>
                    <span class="ml-2 leading-6 w-14.5 max-lg:h-10 ">
                        <p class="text-slate-200 font-bold text-sm ">${el.name}</p>
                        <p class="text-slate-400 font-semibold text-sm">${el.post}</p>
                    </span>
              
                 <select id="positionchange" data-number=${el.nubmer} ${el.status === "blese"?'hidden':""}
    class="mt-2.5 ml-2 w-full max-w-11 h-8 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm font-semibold text-slate-300 focus:border-blue-500">
        <option value="Libre" ${el.positoninlinup === "Libre" ? "selected" : ""}   class="bg-slate-800 font-bold text-slate-500">
            Libre
        </option>

        <option value="GB" ${el.positoninlinup === "GB" ? "selected" : ""} ${dejaOccupe('GB')?'disabled':''}     class="bg-slate-800 font-bold text-amber-500 ${el.post === "GK" ? "" : "hidden"} ${dejaOccupe('GB') ? " text-gray-500" : ""}">
            GB - Gardien ${dejaOccupe('GB')?'(ocuppe)':''}
        </option>

        <option value="CB1" ${el.positoninlinup === "CB1" ? "selected" : ""} ${dejaOccupe('CB1')?'disabled':''} ${el.post === "CB" || el.post === "LB" || el.post === "RB"?"":"hidden"}  class="bg-slate-800 font-bold  ${dejaOccupe('CB1') ? " text-gray-500" : "text-blue-500"}">
            CB2 - Défenseur gauche ${dejaOccupe('CB1')?'(ocuppe)':''}
        </option>

         <option value="CB2" ${el.positoninlinup === "CB2" ? "selected" : ""} ${dejaOccupe('CB2')?'disabled':''} ${el.post === "CB" || el.post === "LB" || el.post === "RB"?"":"hidden"} class="bg-slate-800 font-bold ${dejaOccupe('CB2') ? " text-gray-500" : " text-blue-500"}">
            CB1 - Défenseur gauche ${dejaOccupe('CB2')?'(ocuppe)':''}
        </option>

         <option value="LB" ${el.positoninlinup === "LB" ? "selected" : ""} ${dejaOccupe('LB')?'disabled':''} ${el.post === "CB" || el.post === "LB" || el.post === "RB"?"":"hidden"} class="bg-slate-800 font-bold ${dejaOccupe('LB') ? " text-gray-500" : "text-blue-500"} ">
            LB - Défenseur gauche ${dejaOccupe('LB')?'(ocuppe)':''}
        </option>

         <option value="RB" ${el.positoninlinup === "RB" ? "selected" : ""} ${dejaOccupe('RB')?'disabled':''} ${el.post === "CB" || el.post === "LB" || el.post === "RB"?"":"hidden"} class="bg-slate-800 font-bold  ${dejaOccupe('RB') ? " text-gray-500" : "text-blue-500"}">
            RB - Défenseur gauche ${dejaOccupe('RB')?'(ocuppe)':''}
        </option>

        <option value="CM1" ${el.positoninlinup === "CM1" ? "selected" : ""} ${dejaOccupe('CM1')?'disabled':''} ${el.post === "CM" ?"":"hidden"} class="bg-slate-800 font-bold  ${dejaOccupe('CM1') ? " text-gray-500" : "text-green-500"}">
            CM1 - Milieu central ${dejaOccupe('CM1') ? " (ocuppe)" : ""}
        </option>

         <option value="CM2" ${el.positoninlinup === "CM2" ? "selected" : ""} ${dejaOccupe('CM2')?'disabled':''} ${el.post === "CM" ?"":"hidden"} class="bg-slate-800 font-bold  ${dejaOccupe('CM2') ? " text-gray-500" : "text-green-500"}">
            CM2 - Milieu central ${dejaOccupe('CM2') ? " (ocuppe)" : ""}
        </option>

        <option value="LM" ${el.positoninlinup === "LM" ? "selected" : ""} ${dejaOccupe('LM')?'disabled':''} ${el.post === "CM" ?"":"hidden"} class="bg-slate-800 font-bold  ${dejaOccupe('LM') ? " text-gray-500" : "text-green-500"}">
            LM - Milieu central ${dejaOccupe('LM') ? " (ocuppe)" : ""}
        </option>

        <option value="RM" ${el.positoninlinup === "RM" ? "selected" : ""} ${dejaOccupe('RM')?'disabled':''}  ${el.post === "CM" ?"":"hidden"} class="bg-slate-800 font-bold  ${dejaOccupe('RM') ? " text-gray-500" : "text-green-500"}">
            RM- Milieu central ${dejaOccupe('RM')?'(ocuppe)':''}
        </option>

        <option value="ST1" ${el.positoninlinup === "ST1" ? "selected" : ""} ${dejaOccupe('ST1') ? " text-gray-500" : ""} ${el.post === "ATT"?"":"hidden"} class="bg-slate-800 font-bold  ${dejaOccupe('ST1') ? " text-gray-500" : "text-red-500"}">
            ST 1- Stircker ${dejaOccupe('ST1') ? "(ocuppe)" : ""}
        </option>

        <option value="ST2" ${el.positoninlinup === "ST2" ? "selected" : ""} ${dejaOccupe('ST2')?'disabled':''}  ${el.post === "ATT"?"":"hidden"} class="bg-slate-800 font-bold  ${dejaOccupe('ST2') ? " text-gray-500" : "text-red-500"}">
            ST 2- Stircker ${dejaOccupe('ST2') ? " (ocuppe)" : ""}
        </option>
</select>


                    <div id="PlayerAction" class="  mt-2 text-sm ml-3 max-lg:h-10  max-lg:ml-7  ">

                        <i class="fa-solid fa-trash text-slate-400 " id="deleteplayer" data-number=${el.nubmer}></i>
                        <i class="fa-duotone fa-solid fa-pen  text-slate-400 ml-2" id="modifierplayer" data-number=${el.nubmer}></i>
                    </div>
        `)
        PlayerList.appendChild(playercard)
    });

    // listOfplayer = document.querySelectorAll(".playercardliste")

}

export{showPlayer}