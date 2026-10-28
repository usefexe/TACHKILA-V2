


// delete eror

// modal ajoute

// modal modif

// post select


// form validation

// savegarde de modal
function sauvegarderPlayer(e) {
    e.preventDefault();

    if (!validerFormulaire()) return;

    const newPlayer = {
        name: playerNameInp.value.trim(),
        nubmer: Number(playerNumberInp.value),
        post: selectedPost,
        inlineup: false,
        positoninlinup: "libre"

    };

    if (playerToEdit) {

        playerToEdit.name = newPlayer.name;
        playerToEdit.nubmer = newPlayer.nubmer;
        if (playerToEdit.post !== newPlayer.post) {
            playerToEdit.positoninlinup = 'libre'
            showInlinup()
        }
        playerToEdit.post = newPlayer.post;
        saveInlocalstorage()
        showInlinup()


    } else {

        listBntouce.push(newPlayer);
        saveInlocalstorage()
    }

    showPlayer();

    fermerModal();
    resetModal();

    success.classList.remove("heading");

    setTimeout(() => {
        success.classList.add("heading");
    }, 3000);
}




// supresiion confermation 

confirmedelete.addEventListener('click', () => {
    listBntouce.splice(playertodelete, 1);
    showPlayer();
    showInlinup()
    deleteModal.classList.add('heading')
    deletealert.classList.remove('heading')
    setTimeout(() => {
        deletealert.classList.add('heading')
    }, 3000);
    playerToEdit = null
    saveInlocalstorage()
})


anullerdelete.addEventListener("click", () => {
    deleteModal.classList.add('heading')
    playerToEdit = null
})





ajouterbutton.addEventListener("click", ouvrirAjout);

xmodale.addEventListener("click", fermerModal);
anuller.addEventListener("click", fermerModal);

saveModal.addEventListener("click", sauvegarderPlayer);




// CNAGER LE POST 

function postMatch(choix, player) {
    let match = false
    if (choix === "GB") {
        player.post === "GK" ? match = true : match = false
    } else if (["CM1", "CM2", "RM", "LM"].includes(choix)) {
        player.post === "CM" ? match = true : match = false
    } else if (["CB1", "CB2", "RB", "LB"].includes(choix)) {
        player.post === "CB" ? match = true : match = false
    } else if (["ST1", "ST2"].includes(choix)) {
        player.post === "ATT" ? match = true : match = false
    }
    return match
}


function findPlayr(number) {
    const player = listBntouce.filter(element => {
        return element.nubmer == number
    });

    return player[0]
}


function changerPost(player, postchoix) {
    const postexist = listBntouce.findIndex((el) => {
        return el.positoninlinup === postchoix

    })
    if (postchoix === "Libre") {
        player.positoninlinup = "libre"

        chnagetoband.classList.remove("heading")
        setTimeout(() => {
            chnagetoband.classList.add("heading");
        }, 3000);

    }
    else if (postexist === -1) {
        if (postMatch(postchoix, player)) {
            player.positoninlinup = postchoix

            alertchangepostsucssec.classList.remove("heading")
            setTimeout(() => {
                alertchangepostsucssec.classList.add("heading");
            }, 3000);
        } else {

            postechangerror.classList.remove("heading")
            setTimeout(() => {
                postechangerror.classList.add("heading");
            }, 3000);

        }
    } else {

        postplienerror.classList.remove("heading")
        setTimeout(() => {
            postplienerror.classList.add("heading");
        }, 3000);
    }
    showInlinup()
    showPlayer()
    saveInlocalstorage()
}


PlayerList.addEventListener('change', (e) => {
    const chngerposition = e.target.closest("#positionchange")
    if (chngerposition) {

        let number = chngerposition.dataset.number
        const player = findPlayr(number)
        const postchoix = chngerposition.value
        changerPost(player, postchoix)
    } else {
        return
    }
}
)
showPlayer()



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
//
Reset.addEventListener('click',()=>{
      listBntouce.forEach((el)=>{
        el.positoninlinup="libre"
        saveInlocalstorage()
        showInlinup()
        restalert.classList.remove('heading')
        setTimeout(() => {
            restalert.classList.add('heading')
        }, 3000);
      })
})


autoassigned.addEventListener('click',()=>{
     const postes = ["GB","LB","RB","CB1","CB2","LM","CM1","CM2","RM","ST1","ST2"];
    listBntouce.forEach((player) => {
        if (player.positoninlinup.toLowerCase() !== "libre") {
            return
        }
        const postDisponible = postes.find((poste) => {

            const dejaOccupe = listBntouce.some((el) => {
                return el.positoninlinup.toUpperCase() === poste;
            });
        
            return !dejaOccupe && postMatch(poste, player);
        });

      
        if (postDisponible) {
            player.positoninlinup = postDisponible;
        }

    })
  
      autoassignedmsg.classList.remove('heading')
        setTimeout(() => {
            autoassignedmsg.classList.add('heading')
        }, 3000);
      
    showInlinup()
    showPlayer()
    saveInlocalstorage()
})