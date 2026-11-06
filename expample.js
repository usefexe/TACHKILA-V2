


// delete eror

// modal ajoute

// modal modif

// post select


// form validation

// savegarde de modal




// supresiion confermation 






ajouterbutton.addEventListener("click", ouvrirAjout);

xmodale.addEventListener("click", fermerModal);
anuller.addEventListener("click", fermerModal);

saveModal.addEventListener("click", sauvegarderPlayer);




// CNAGER LE POST 


















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