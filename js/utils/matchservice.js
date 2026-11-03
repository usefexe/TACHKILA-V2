import { matchs, savematchlocalstr } from "../storage/localstorage.js";
export function setMatchTheme(match) {

    const now = new Date();
    const matchDate = new Date(`${match.date}T${match.heure}:00`);

    const isUpcoming = matchDate > now;

    const hasScore =
        match.butsAtlas !== null &&
        match.butsAdversaire !== null;

    const hasComposition = match.composition.length > 0;

    let theme = {
        color: "",
        txt: "",
        score: null,
        showScore: false,
        showScoreButton: false,
        showComposition: hasComposition,
        hasscoore:hasScore,
        
    };

    
    if (isUpcoming) {
        theme.color = "sky";
        theme.txt = "À venir";
    }

  
    else if (!hasScore) {
        theme.color = "orange";
        theme.txt = "Terminé";
        theme.showScoreButton = true;
    }


    else {
        theme.showScore = true;
        theme.score = `${match.butsAtlas} - ${match.butsAdversaire}`;

        if (match.butsAtlas > match.butsAdversaire) {
            theme.color = "green";
            theme.txt = "Victoire";
        }
        else if (match.butsAtlas < match.butsAdversaire) {
            theme.color = "red";
            theme.txt = "Défaite";
        }
        else {
            theme.color = "slate";
            theme.txt = "Nul";
        }
    }

    return theme;
}

export function formatMatchDate(date) {

    const matchDate = new Date(`${date}T12:00:00`);

    return {
        day: matchDate.toLocaleDateString("en-US", {
            weekday: "short"
        }).toUpperCase(),

        month: matchDate.toLocaleDateString("en-US", {
            month: "short"
        }).toUpperCase(),

        date: matchDate.getDate()
    };
}
export function findMatch(id){
   const Match=matchs.filter((el)=>{
    return el.id==id
   })
   return Match[0]
}

export function saveMatchs() {
    // localStorage.setItem("matchs", JSON.stringify(matchs));
   
}
export function deleteMatch(index){
    matchs.splice(index,1)
    savematchlocalstr()
}