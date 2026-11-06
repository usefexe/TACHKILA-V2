const getPlayer= JSON.parse(localStorage.getItem("joueurs")) || []

export const matchs =JSON.parse(localStorage.getItem("matchs")) || []



export function savematchlocalstr(){
    localStorage.setItem("matchs",JSON.stringify(matchs))
}
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
    playertodelete:null,
    marchtoassign:null
}
export const mtchstate={
    serchinp:null,
    filter:"ALL",
    playertodelete:null,
    matchToedit:null

}