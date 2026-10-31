const effectiveEditModal = document.getElementById("effectiveEditModal");

const effectiveEditName = document.getElementById("effectiveEditName");
const effectiveEditNumber = document.getElementById("effectiveEditNumber");
const effectiveEditPost = document.getElementById("effectiveEditPost");
const effectiveEditAge = document.getElementById("effectiveEditAge");
const effectiveEditStatus = document.getElementById("effectiveEditStatus");
const effectiveEditError = document.getElementById("effectiveEditError");
import { saveInlocalstorage } from "../../../effictif.js";
import { effstate,getPlayer } from "../../storage/localstorage.js";
import { showEffectif } from "../../ui/showeffective.js";




export function ouvrirEditEffective(player) {
 effstate.playerToEdit = player;

  effectiveEditName.value = player.name;
  effectiveEditNumber.value = player.nubmer;
  effectiveEditPost.value = player.post;
  effectiveEditAge.value = player.age;
  effectiveEditStatus.value = player.status;

  effectiveEditError.classList.add("hidden");

  effectiveEditModal.classList.remove("hidden");
  effectiveEditModal.classList.add("flex");
}

export function fermerEditEffective() {
  effectiveEditModal.classList.add("hidden");
  effectiveEditModal.classList.remove("flex");

  effstate.playerToEdit = null;
}

export function sauvegarderEditEffective() {
  if (!effstate.playerToEdit) return;

  const name = effectiveEditName.value.trim();
  const number = Number(effectiveEditNumber.value);
  const age = Number(effectiveEditAge.value);
  const post = effectiveEditPost.value;
  const status = effectiveEditStatus.value;

  const nmRgx =
    /^[a-zA-ZàáâäãåąčćęèéêëėįíîïłńòóôöõøùúûüųūÿýżźñçčšžæœÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ ,.'-]{3,10}$/;

  if (!name || !nmRgx.test(name.trim())) {
    afficherErreur("Nom invalide.");
    return;
  }

  if (!Number.isInteger(number) || number < 1 || number > 99) {
    afficherErreur("Numéro invalide (1 à 99).");
    return;
  }

  const numberExist = getPlayer.some(
    (player) => player.nubmer === number && player !== effstate.playerToEdit,
  );

  if (numberExist) {
    afficherErreur("Ce numéro existe déjà.");
    return;
  }

  if (!Number.isInteger(age) || age < 18 || age > 39) {
    afficherErreur("Âge invalide (15 à 45).");
    return;
  }

  effstate.playerToEdit.name = name;
  effstate.playerToEdit.nubmer = number;
  effstate.playerToEdit.age = age;
  effstate.playerToEdit.status = status;

  if (effstate.playerToEdit.post !== post) {
    effstate.playerToEdit.post = post;
    effstate.playerToEdit.inlineup = false;
    effstate.playerToEdit.positoninlinup = "libre";
  }

  saveInlocalstorage();

  showEffectif();

  fermerEditEffective();
}

function afficherErreur(message) {
  effectiveEditError.textContent = message;
  effectiveEditError.classList.remove("hidden");
}
