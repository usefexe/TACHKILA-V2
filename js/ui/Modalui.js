import { nameError , postError , numberError , playerNameInp , playerNumberInp ,selectedPost} from ".js";
function cacherErreurs() {

    nameError.classList.add("heading");
    postError.classList.add("heading");
    numberError.classList.add("heading");
}

function fermerModal() {
    modale.classList.add("heading");
    cacherErreurs();
}

function resetModal() {
    playerNameInp.value = "";
    playerNumberInp.value = "";
    selectedPost = "";
    playerToEdit = null;
}


export{cacherErreurs , fermerModal , resetModal }