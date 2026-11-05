  import { getPlayer } from "../../storage/localstorage.js"
 import { saveInlocalstorage } from "../../../effictif.js"
  export function setcapitan(player){
    getPlayer.forEach((el)=>{
        el.itcapitan=false
    })
     player.itcapitan=true
  }

  export function findPlayr(number) {
    const player = getPlayer.filter((element) => {
      return element.nubmer == number;
    });
  
    return player[0];
  }
  
  export function deleteplayer(index){
      getPlayer.splice(index,1)
      saveInlocalstorage()
  }