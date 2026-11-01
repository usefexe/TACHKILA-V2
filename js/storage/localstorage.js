const getPlayer= JSON.parse(localStorage.getItem("joueurs")) || []

export const matchs = [
    {
        id: "1730112000001",
        adversaire: "Union Oasis",
        date: "2026-10-10",
        heure: "15:00",
        lieu: "Stade Municipal Oasis",
        domicile: true,
        butsAtlas: 3,
        butsAdversaire: 1,
        composition: []
    },
    {
        id: "1730112000002",
        adversaire: "Raja Casablanca",
        date: "2026-10-15",
        heure: "17:30",
        lieu: "Stade Mohammed V",
        domicile: false,
        butsAtlas: 0,
        butsAdversaire: 2,
        composition: []
    },
    {
        id: "1730112000003",
        adversaire: "Wydad Athletic Club",
        date: "2026-10-20",
        heure: "20:00",
        lieu: "Stade Atlas",
        domicile: true,
        butsAtlas: 2,
        butsAdversaire: 2,
        composition: []
    },
    {
        id: "1730112000004",
        adversaire: "FUS Rabat",
        date: "2026-10-25",
        heure: "16:00",
        lieu: "Stade Al Barid",
        domicile: false,
        butsAtlas: null,
        butsAdversaire: null,
        composition: []
    },
    {
        id: "1730112000005",
        adversaire: "Olympique Safi",
        date: "2026-11-05",
        heure: "18:00",
        lieu: "Stade Municipal",
        domicile: true,
        butsAtlas: null,
        butsAdversaire: null,
        composition: []
    }
];
export{getPlayer}  

export const state = {
    playerToEdit: null,
    selectedPost: ""
    
};
export const   effstate={
    filtered:"ALL",
    searchValue:null,
    currentpage:1,
    totalpage:1,
    playerToEdit:null,
    playertodelete:null
}
export const mtchstate={
    serchinp:null,
    filter:"ALL"

}