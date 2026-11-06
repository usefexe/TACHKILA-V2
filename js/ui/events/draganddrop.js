

import { PlayerList ,terrainPostes } from "../../storage/htmldata.js";
import { findPlayr } from "../../utils/modalmanipulation/playersevice.js";
import { changerPost } from "../../utils/modalmanipulation/playersevice.js";
let dragedelement=null
let playertodraged=null
let postdraged=null
function desabledpost(exits) {
  
      Object.keys(terrainPostes).forEach((key) => {
        if (!exits.includes(key)) {
            const post = terrainPostes[key]
            post.classList.add("notapost")}
        
    })
}
 function undisablepost(){
        Object.keys(terrainPostes).forEach((key) => {
        
            const post = terrainPostes[key]
            post.classList.remove("notapost")
        
    })
 }



 function showMatchPost(el) {
    const number = el.querySelector("#number").textContent
    const player = findPlayr(number)
    if(player.post==="GK"){
        desabledpost(["gb"])
        
    }else if(player.post==="CB"){
        desabledpost(["lb","rb","cb1","cb2"])
    }else if(player.post==="CM"){
        desabledpost(["lm","rm","cm1","cm2"])
    }else if (player.post==="ATT"){
        desabledpost(["st1","st2"])
    }

    
}

export function dragAndDrop(){
        PlayerList.addEventListener("dragstart", (e) => {
    const card = e.target.closest(".playercardliste");
    if (!card) return;

    dragedelement = card;

    const number = card.querySelector("#number").textContent.trim();
    playertodraged = findPlayr(number);

    card.style.opacity = "0.5";

    showMatchPost(card);
});



PlayerList.addEventListener("dragend", (e) => {
    const card = e.target.closest(".playercardliste");
card.style.opacity = "1";
   

    dragedelement = null;
    playertodraged = null;
    postdraged = null;

    undisablepost();

    Object.values(terrainPostes).forEach(post => {
        post.classList.remove("selectedpost");
    });
});



Object.keys(terrainPostes).forEach((key) => {
    const post = terrainPostes[key];

    post.addEventListener("dragover", (e) => {
        if (!post.classList.contains("notapost")) {
            e.preventDefault();
            postdraged = key;
            post.classList.add("selectedpost");
        }
    });

    post.addEventListener("dragleave", () => {
        post.classList.remove("selectedpost");
        postdraged = null;
    });

    post.addEventListener("drop", (e) => {
        e.preventDefault();

        if (!playertodraged || post.classList.contains("notapost")) {
            return;
        }
undisablepost();
        changerPost(playertodraged, key.toUpperCase());

        post.classList.remove("selectedpost");
        postdraged = null;
    });
});
}