const ajouterbutton = document.getElementById("ajouter")
const PlayerList=document.getElementById('PlayerList')
const xmodale = document.getElementById("closeModal")
const modale = document.getElementById("modalOverlay")
const modifmodale = document.getElementById("modifmodalOverlay")
const saveModal = document.getElementById("addPlayer")
const anuller = document.getElementById("cancelModal")
const countplayer = document.getElementById("countPlayer")
const Reset=document.getElementById("Reset")
 const autoassignedmsg=document.getElementById('autoassignedmsg')
let listBntouce = null
const autoassigned=document.getElementById('autoassigned')
const alertchangepostsucssec = document.getElementById("sucssecpostmodif")
const postechangerror = document.getElementById("postechangerror")
const postplienerror = document.getElementById("postplienerror")
const chnagetoband = document.getElementById("chnagetoband")
const deleteModal = document.getElementById("deleteModal")
const anullerdelete = document.getElementById("cancelDelete")
const confirmedelete = document.getElementById("confirmDelete")
const deletealert = document.getElementById("deletealert")
const playerNameInp = document.getElementById("playerName");
const playerNumberInp = document.getElementById("playerNumber");
const nameError = document.getElementById("nameerror");
const postError = document.getElementById("posterror");
const numberError = document.getElementById("nbrerror");
const success = document.getElementById("sucssec");
const positionParent = document.getElementById("positionPlaye");

let selectedPost = "";
const restalert=document.getElementById('restalert')
let playertodraged=null
let postdraged=null
let text = success.querySelector('#text')
let playertodelete = null
const terrainPostes = {
    gb: document.getElementById('gk'),
    lb: document.getElementById('lb'),
    rb: document.getElementById('rb'),
    cb1: document.getElementById('cb1'),
    cb2: document.getElementById('cb2'),
    lm: document.getElementById('lm'),
    cm1: document.getElementById('cm1'),
    cm2: document.getElementById('cm2'),
    rm: document.getElementById('rm'),
    st1: document.getElementById('st1'),
    st2: document.getElementById('st2')
};
let listOfplayer = []

listBntouce = JSON.parse(localStorage.getItem("joueurs")) || []

let dragedelement = null

export{countplayer,PlayerList,terrainPostes,nameError,postError,numberError,playerNameInp,playerNumberInp,selectedPost,modale,positionParent,saveModal,text,deleteModal,ajouterbutton, xmodale,anuller}