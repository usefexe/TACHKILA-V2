

import { getPlayer } from "../../storage/localstorage.js";
let listBntouce = getPlayer;
import { showInlinup } from "../../ui/Showplayerinlnlinup.js";
import { showPlayer } from "../../ui/ShowPlayer.js";
import {
  postplienerror,
  chnagetoband,
  alertchangepostsucssec,
  postechangerror,
} from "../../storage/htmldata.js";
import { postMatch } from "../logiquemetier/postmatch.js";
import { saveInlocalstorage } from "../../index.js";

export function createPlayer(playerNameInp, playerNumberInp, selectedPost) {
  const newPlayer = {
    name: playerNameInp.value.trim(),
    nubmer: Number(playerNumberInp.value),
    post: selectedPost,
    inlineup: false,
    positoninlinup: "libre",
  };
  return newPlayer;
}

export function editePlayer(playerToEdit, newPlayer) {
  playerToEdit.name = newPlayer.name;
  playerToEdit.nubmer = newPlayer.nubmer;
  if (playerToEdit.post !== newPlayer.post) {
    playerToEdit.positoninlinup = "libre";
    showInlinup();
  }
  playerToEdit.post = newPlayer.post;
}

export function findPlayr(number) {
  const player = listBntouce.filter((element) => {
    return element.nubmer == number;
  });

  return player[0];
}

export function changerPost(player, postchoix) {
  const postexist = listBntouce.findIndex((el) => {
    return el.positoninlinup === postchoix;
  });
  if (postchoix === "Libre") {
    player.positoninlinup = "libre";

    chnagetoband.classList.remove("heading");
    setTimeout(() => {
      chnagetoband.classList.add("heading");
    }, 3000);
  } else if (postexist === -1) {
    if (postMatch(postchoix, player)) {
      player.positoninlinup = postchoix;

      alertchangepostsucssec.classList.remove("heading");
      setTimeout(() => {
        alertchangepostsucssec.classList.add("heading");
      }, 3000);
    } else {
      postechangerror.classList.remove("heading");
      setTimeout(() => {
        postechangerror.classList.add("heading");
      }, 3000);
    }
  } else {
    postplienerror.classList.remove("heading");
    setTimeout(() => {
      postplienerror.classList.add("heading");
    }, 3000);
  }
  showInlinup();
  showPlayer();
  saveInlocalstorage();
}
