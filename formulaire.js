function verifForm(e){
    e.preventDefault();
    console.log("mon formulaire");
    let nom = document.getElementById("nom");
    let valeur = nom.value
    console.log(valeur);
    let estUnNom = /^[A-Za-z\ ]+$/.test(valeur);
    console.log(estUnNom);

    let prénom = document.getElementById("prénom");
    let valeurprénom = prénom.value
    console.log(valeurprénom);
    let estUnPrénom = /^[A-Za-z]+$/.test(valeurprénom);
    console.log(estUnPrénom);

    let adresse = document.getElementById("adresse");
    let valeurAdresse = adresse.value
    console.log(valeurAdresse);
    let estAdresse = /^[A-Za-z\ \,\/0-9]+$/.test(valeurAdresse);
    console.log(estAdresse);

    let ville = document.getElementById("ville");
    let valeurVille = ville.value
    console.log(valeurVille);
    let estVille = /^[A-Za-z]+$/.test(valeurVille);
    console.log(estVille);

    let code = document.getElementById("code");
    let valeurCode = code.value
    console.log(valeurCode);
    let estCode = /^[0-9]+$/.test(valeurCode);
    console.log(estCode);

    let email = document.getElementById("email");
    let valeurEmail = email.value
    console.log(valeurEmail);
    let estEmail = /^([a-z\d\.-]+)@([a-z]{2,8})(\.[a-z]{2,8})?$/.test(valeurEmail);
    console.log(estEmail);

    let téléphone = document.getElementById("téléphone");
    let valeurTéléphone = téléphone.value
    console.log(valeurTéléphone);
    let estTéléphone = /^[0-9\+]+$/.test(valeurTéléphone);
    console.log(estTéléphone);

    if (estUnNom == true){
        document.getElementById("formulaire").submit();
    }
    if (estUnNom == false){
        console.log("Votre formulaire est mal rempli");
        pseudo.style.borderColor = "red";
    }

    if (estUnPrénom == true){
        document.getElementById("formulaire").submit();
    }
    if (estUnPrénom == false){
        console.log("Votre formulaire est mal rempli");
        prénom.style.borderColor = "red";
    }


    if (estAdresse == true){
        document.getElementById("formulaire").submit();
    }
    if (estAdresse == false){
        console.log("Votre formulaire est mal rempli");
        adresse.style.borderColor = "red";
    }


    if (estVille == true){
        document.getElementById("formulaire").submit();
    }
    if (estVille == false){
        console.log("Votre formulaire est mal rempli");
        ville.style.borderColor = "red";
    }


    if (estCode == true){
        document.getElementById("formulaire").submit();
    }
    if (estCode == false){
        console.log("Votre formulaire est mal rempli");
        code.style.borderColor = "red";
    }


    if (estEmail == true){
        document.getElementById("formulaire").submit();
    }
    if (estEmail == false){
        console.log("Votre formulaire est mal rempli");
        email.style.borderColor = "red";
    }

    if (estTéléphone == true){
        document.getElementById("formulaire").submit();
    }
    if (estTéléphone == false){
        console.log("Votre formulaire est mal rempli");
        téléphone.style.borderColor = "red";
    }
}

let formulaire = document.getElementById("formulaire");
formulaire.addEventListener("submit",verifForm);
///////////////////////////////////////////////////////////////
function checkregex (unPseudo){

let unPseudoRegex = /^[A-Za-z\ \,\-0-9]+$/;
return unPseudoRegex.test(unPseudo);//fonction renvoie une information à l'extérieur
}
///////////////////////////////////////////////////////////////
function verifMot(e){
    e.preventDefault();
    console.log("mon formulaire");
    let pseudo = document.getElementById("pseudo");
    let valeurPseudo = pseudo.value;
    console.log(valeurPseudo);
    let estPseudo = checkregex(valeurPseudo);
    console.log(estPseudo);///^[A-Za-z\ \,\-0-9]+$/.test

    let passe = document.getElementById("passe");
    let valeurPasse = passe.value;
    console.log(valeurPasse);
    let estPasse = checkregex(valeurPasse);//doit commencer par une majuscule
    console.log(estPasse);///^[A-Z][A-Za-z\ \,\-0-9]+$/.test

    if ((estPseudo) && (estPasse == true)){//syntaxe de estPseudo et estPasse sont équivalentes
        document.getElementById("formula").submit();
    }
    if (estPseudo == false){
        console.log("Votre formulaire est mal rempli");
        pseudo.style.borderColor = "red";
    }
    if (!estPasse){//syntaxe de estPseudo et estPasse sont équivalentes
        console.log("Votre formulaire est mal rempli");
        passe.style.borderColor = "red";
    }



}

let formula = document.getElementById("formula");
formula.addEventListener("submit",verifMot);