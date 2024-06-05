function calcule() {
    console.log("calcule");

    let masse = parseFloat(document.getElementById("masse").value);
    let taille = parseFloat(document.getElementById("taille").value);

    if (isNaN(masse) || isNaN(taille) || masse <= 0 || taille <= 0) return;

    let resultat = document.getElementById("resultat");
    let hiden_result_container = document.getElementById("hiden-result-container");
    let imc = masse / Math.pow(taille, 2);
    let message = "";
    resultat.setAttribute("data-theme", "c");

    if (imc < 16.5) {
        message = "La personne est en dénutrition";
    } else if (imc < 18.5) {
        message = "La personne est en maigreur";
    } else if (imc < 25) {
        message = "La personne a un poids normal";
        resultat.setAttribute("data-theme", "a");
    } else if (imc < 30) {
        message = "La personne est en surpoids";
    } else if (imc < 35) {
        message = "La personne est en obésité modérée";
    } else if (imc < 40) {
        message = "La personne est en obésité sévère";
    } else {
        message = "La personne est en obésité morbide ou massive";
    }

    resultat.value = message;
    hiden_result_container.hidden = false;
}
