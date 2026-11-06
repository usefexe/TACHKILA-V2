import { valideCOmposistion } from "../../utils/modalmanipulation/playersevice.js"
const assignComposition=document.getElementById('assignComposition')
const selectMatch=document.getElementById('selectMatch')
import { effstate } from "../../storage/localstorage.js"

export function chnageEquipeComp(){
selectMatch.addEventListener('change',()=>{
    if(valideCOmposistion()){
        assignComposition.disabled=false
        effstate.marchtoassign=selectMatch.value
        
    }else{
        assignComposition.disabled=true
    }
})
}