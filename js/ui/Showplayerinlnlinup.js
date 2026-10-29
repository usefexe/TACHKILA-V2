import { getPlayer } from "../storage/localstorage.js"
const liste =getPlayer
import { terrainPostes } from "../storage/htmldata.js"
function showInlinup(listBntouce) {
   console.log(listBntouce)
    //clean all post 
    Object.keys(terrainPostes).forEach((key) => {
        const post = terrainPostes[key]
        let postplayer = post.querySelector('button')
        let number = post.querySelector('div')
        number.textContent = ""

        postplayer.textContent = key.toUpperCase()
    })
    //show player in post from aarray
    liste.forEach((el) => {
        if (el.positoninlinup === "libre") {
            return
        } else {
            let post = terrainPostes[el.positoninlinup.toLowerCase()];
            let postplayer = post.querySelector('button')
            let number = post.querySelector('div')
            number.textContent = el.nubmer

            postplayer.textContent = el.name


        }
    })
}
  export{showInlinup}