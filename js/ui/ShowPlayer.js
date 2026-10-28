
import { countplayer,PlayerList } from "../storage/htmldata.js"
function showPlayer(listBntouce) {

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
        playercard.draggable = true;
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
              
                 <select id="positionchange" data-number=${el.nubmer}
    class="mt-2.5 ml-2 w-full max-w-11 h-8 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm font-semibold text-slate-300 focus:border-blue-500">
        <option value="Libre" ${el.positoninlinup === "Libre" ? "selected" : ""} class="bg-slate-800 font-bold text-slate-500">
            Libre
        </option>

        <option value="GB" ${el.positoninlinup === "GB" ? "selected" : ""} class="bg-slate-800 font-bold text-amber-500">
            GB - Gardien
        </option>

        <option value="CB1" ${el.positoninlinup === "CB1" ? "selected" : ""} class="bg-slate-800 font-bold text-blue-500">
            CB2 - Défenseur gauche
        </option>

         <option value="CB2" ${el.positoninlinup === "CB2" ? "selected" : ""} class="bg-slate-800 font-bold text-blue-500">
            CB1 - Défenseur gauche
        </option>

         <option value="LB" ${el.positoninlinup === "LB" ? "selected" : ""} class="bg-slate-800 font-bold text-blue-500">
            LB - Défenseur gauche
        </option>

         <option value="RB" ${el.positoninlinup === "RB" ? "selected" : ""} class="bg-slate-800 font-bold text-blue-500">
            RB - Défenseur gauche
        </option>

        <option value="CM1" ${el.positoninlinup === "CM1" ? "selected" : ""} class="bg-slate-800 font-bold text-green-500">
            CM1 - Milieu central
        </option>

         <option value="CM2" ${el.positoninlinup === "CM2" ? "selected" : ""} class="bg-slate-800 font-bold text-green-500">
            CM2 - Milieu central
        </option>

        <option value="LM" ${el.positoninlinup === "LM" ? "selected" : ""} class="bg-slate-800 font-bold text-green-500">
            LM - Milieu central
        </option>

        <option value="RM" ${el.positoninlinup === "RM" ? "selected" : ""} class="bg-slate-800 font-bold text-green-500">
            RM- Milieu central
        </option>

        <option value="ST1" ${el.positoninlinup === "ST1" ? "selected" : ""} class="bg-slate-800 font-bold text-red-500">
            ST 1- Stircker
        </option>

        <option value="ST2" ${el.positoninlinup === "ST2" ? "selected" : ""} class="bg-slate-800 font-bold text-red-500">
            ST 2- Stircker
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