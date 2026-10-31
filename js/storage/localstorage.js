const getPlayer= JSON.parse(localStorage.getItem("joueurs")) || []


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