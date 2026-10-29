const getPlayer= JSON.parse(localStorage.getItem("joueurs")) || []


export{getPlayer}  

export const state = {
    playerToEdit: null,
    selectedPost: ""
};