function validerNom(name) {
    const nmRgx = /^[a-zA-ZàáâäãåąčćęèéêëėįíîïłńòóôöõøùúûüųūÿýżźñçčšžæœÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ ,.'-]{3,10}$/;

    return nmRgx.test(name.trim());
}

export {validerNom}