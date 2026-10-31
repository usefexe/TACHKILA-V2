import { effstate, getPlayer } from "../storage/localstorage.js";


const playereffliste = document.getElementById("playereffliste");

export const datatoexport =null

function definplaeyrthme(player) {
    
  if (player.post === "GK") {
    return { Tshirt: "../imgs/gk.png", color: "blue" };
  } else if (
    player.post === "CB" ||
    player.post === "LB" ||
    player.post === "RB"
  ) {
    return { Tshirt: "../imgs/def.png", color: "blue" };
  } else if (player.post === "CM") {
    return { Tshirt: "../imgs/mid.png", color: "green" };
  } else {
    return { Tshirt: "../imgs/att.png", color: "red" };
  }
}
export function showEffectif() {
    
   playereffliste.innerHTML = "";

   
    let filteredPlayers = getPlayer.filter((el) => {
        const matchName = el.name.toLowerCase().includes(
            (effstate.searchValue || "").toLowerCase()
        );

        const matchPost = effstate.filtered === "ALL" ||
            el.post === effstate.filtered;

        return matchName && matchPost;
    });

    
    const start = (effstate.currentpage - 1) * 6;
     const pagedata = filteredPlayers.slice(start, start + 6);

  pagedata.forEach((el) => {
    const theme = definplaeyrthme(el);
    let divclass =
      `w-90 max-w-sm h-40 rounded-2xl border border-slate-700 border-l-[5px] border-l-${theme.color}-500 bg-slate-800/80 p-5 text-white shadow-sm`;
    let div = document.createElement("div");
    divclass.split(" ").forEach((clas) => {
      div.classList.add(clas);
    });
    
    div.innerHTML=`
  
    <div class="flex items-center gap-3">

        <div class="flex h-[54px] w-[54px] shrink-0 items-center 
                    justify-center bg-[url('${theme.Tshirt}')] bg-no-repeat  bg-center bg-cover
                    text-xl font-bold text-white">
           ${el.nubmer}
        </div>

        <div>
            <h3 class="text-lg font-bold leading-6">
              ${el.name}
            </h3>

            <span class="mt-1 inline-block rounded-lg bg-${theme.color}-500/20
                         px-2.5 py-1 text-sm font-bold text-${theme.color}-400">
               ${el.post}
            </span>
            
        </div>
        <button type="button"
                    class="flex h-7 w-20 items-center justify-center ${el.itcapitan===true?'':'hidden'}
                            border border-slate-600
                           text-lg font-bold text-slate-300 text-sm bg-purple-700  ml-17 rounded-xl mb-3
                           ">
                Capitan
            </button>
    </div>

    <p class="mt-2 text-base text-slate-400">
       <span class="font-bold"> Âge</span> : ${el.age} ans
    </p>

 
    <div class="mt-2 flex items-center justify-between">

        <span class="rounded-lg bg-${el.status==='enforme'?'emerald':'red'}-500/15 px-2.5 py-1
                     text-sm font-bold text-${el.status==='enforme'?'emerald':'red'}-400">
            ${el.status}
        </span>

        <div class="flex items-center gap-3">

        
            <button type="button" data-number=${el.nubmer} id='capitan'
                    class="flex h-7 w-7 items-center justify-center
                           rounded-full border border-slate-600
                           text-lg font-bold text-slate-300 text-sm
                           hover:bg-purple-700">
                C
            </button>


            <button type="button"  data-number='${el.nubmer}' id='edite'
                    class="text-slate-400 transition hover:text-blue-400 text-m"
                    aria-label="Modifier">
                <i class="fa-solid fa-pen"></i>
            </button>

            <!-- Bouton Supprimer -->
            <button type="button"   data-number='${el.nubmer}' id='delete'
                    class="text-slate-400 transition hover:text-red-500 text-m"
                    aria-label="Supprimer">
                <i class="fa-solid fa-trash-can"></i>
            </button>

        </div>
    </div>


`
  playereffliste.appendChild(div)
  });

}
