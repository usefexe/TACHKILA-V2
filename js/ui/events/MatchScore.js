import { savematchlocalstr } from "../../storage/localstorage.js";
import { findMatch } from "../../utils/matchservice.js";
import { showMatch } from "../showmatch.js";
const txt=document.getElementById('text')
const succes=document.getElementById('sucssec')
const scoreModal=document.getElementById('score')
const scoreAdvirsaire=document.getElementById('scoreAdvirsaire')
const atlasscore = document.getElementById('atlasscore')
const cancelScore = document.getElementById('cancelScore')
const saveScore=document.getElementById('saveScore')
const scoreError=document.getElementById('scoreError')
const adv=document.getElementById('adv')

export function matchScore(id){
    txt.textContent='confirmation score de match inseerer'
    const match = findMatch(id)
  
    scoreModal.classList.remove('hidden')
    adv.textContent=match.adversaire

cancelScore.addEventListener('click',()=>{
scoreModal.classList.add('hidden')
   })
   saveScore.addEventListener('click',()=>{
   
    if(Number.isInteger(Number(scoreAdvirsaire.value))&&Number.isInteger(Number(atlasscore.value)) &&scoreAdvirsaire.value.trim()!==""||atlasscore.value.trim()!==""){
          scoreError.classList.add('hidden')
    match.butsAdversaire=Number(scoreAdvirsaire.value)
    match.butsAtlas=Number(atlasscore.value)
    savematchlocalstr()
    showMatch()
    scoreModal.classList.add('hidden')
    succes.classList.remove('hidden')
    setTimeout(()=>{
         succes.classList.add('hidden')
    },3000)
    }else{
        scoreError.classList.remove('hidden')
    }
   })
   

   
}