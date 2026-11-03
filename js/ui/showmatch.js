
import { matchs } from "../storage/localstorage.js";
const matchCrads=document.getElementById('matchlsit')
import { setMatchTheme } from "../utils/matchservice.js";
import { formatMatchDate } from "../utils/matchservice.js";
import { mtchstate } from "../storage/localstorage.js";

export function showMatch(){
let matchlist=matchs.filter((el) => {
    const matchTheme=setMatchTheme(el)
        const matchName = el.adversaire.toLowerCase().includes(
            (mtchstate.serchinp || "").toLowerCase()
        );

         const matchFilter =
        mtchstate.filter === "ALL" ||
        (mtchstate.filter === "avenir" && matchTheme.txt === "À venir") ||
        (mtchstate.filter === "joues" && matchTheme.txt !== "À venir");


        return matchName && matchFilter;
    });


 matchCrads.innerHTML=''

matchlist.forEach((el)=>{
   
       const div = document.createElement('div')
        const matchth=setMatchTheme(el)
       const classlis=`flex py-1 my-3 px-3 bg-sky-900/40 justify-between rounded-xl border-l-5 border-${matchth.color}-500`
       classlis.split(' ').forEach(el=>{
        div.classList.add(el)
       }) 
      const dt=formatMatchDate(el.date)
       div.innerHTML=`       
   
    
    <div class="match-date flex flex-col  items-center gap-0 py-0 rounded-2xl bg-sky-950/60 w-20">
        <span class="day font-semibold text-slate-300">${dt.day}</span>
        <span class="date font-bold text-slate-100 text-3xl">${dt.date}</span>
        <span class="month font-semibold text-slate-300 text-center">${dt.month}</span>
        <span class="time text-sm font-semibold text-slate-500 flex gap-1 items-center " > <i class="fa-solid fa-clock"></i>${el.heure}</span>
    </div>



  
    <div class="match-info flex gap-3 items-center">

        <span class="match-type bg-green-600/70 rounded-2xl font-semibold text-slate-200 h-7 px-2">Domicile</span>
   <div class='w-70'>
        <h2 class="text-2xl font-bold  text-slate-300">Atlas FC vs ${el.adversaire}</h2>

        <p class="match-location text-slate-400 font-semibold ml-9">
            <span><i class="fa-solid fa-location-dot"></i></span>
            ${el.lieu}
        </p>
       </div>
    </div>

   
    <div class="match-result flex flex-col items-center mt-4 ">

        <span class="score py-1 w-20 bg-${matchth.color}-600/70 rounded-2xl ${!matchth.showScore?'hidden':''} text-l text-center font-bold text-slate-300">${el.butsAtlas} - ${el.butsAdversaire}</span>

        <span class="result-status text-2xl font-bold text-${matchth.color}-400">${matchth.txt}</span>

    </div>

    <!-- Match Actions -->
    <div class="match-actions flex flex-col items-center h-full gap-2 mt-3">

        <div class="edit-score bg-sky-800/80 hover:bg-sky-600 w-30 text-center text-slate-400 font-semibold rounded-xl h-9 items-center flex items-center justify-center ${!matchth.showScoreButton?'hidden':''}">
           
            Saiser le score
        </div>

        <button type="button" class="lineup-button bg-sky-800/20 hover:bg-sky-600/20 w-30 text-center text-slate-200 font-semibold rounded-xl h-9 ${!matchth.showComposition?'hidden':''} items-center flex items-center justify-center" >
          composition
        </button>

    </div>
    
    <div class="flex items-center px-2 gap-2">
        <button type="button"   id='modifierMatch' data-id='${el.id}'
                    class="  modifierMatch text-slate-400 transition hover:text-blue-400 text-m"
                    aria-label="Modifier">
                <i class="fa-solid fa-pen"></i>
            </button>

            <!-- Bouton Supprimer -->
            <button type="button"    id='suprimerMatch' data-id='${el.id}'
                    class="text-slate-400 transition hover:text-red-500 text-m"
                    aria-label="Supprimer">
                <i class="fa-solid fa-trash-can"></i>
            </button>

</div>`
matchCrads.appendChild(div)
})





}