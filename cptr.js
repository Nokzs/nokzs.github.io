
function calculerDuree(date2) {
    // Conversion des chaînes de caractères en objets Date
    const d1 = Date.now();
    const d2 = new Date(date2);

    // Calcul de la différence en millisecondes
    const difference = d2 - d1;

    // Conversion de la différence en jours, heures, minutes et secondes
    const jours = Math.floor(difference / (1000 * 60 * 60 * 24));
    const heures = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.floor((difference % (1000 * 60)) / 1000);

    return {
        jours: jours,
        heures: heures,
        minutes: minutes,
        secondes: secondes
    };
}



const texte = document.getElementById("tempsRestant")
document.addEventListener("load",()=>{
    setInterval(()=>{
        const date2 = '2024-08-05T10:00:00';
        const duree = calculerDuree(date2);
        texte.innerText =`Durée: ${duree.jours} jours, ${duree.heures} heures, ${duree.minutes} minutes, ${duree.secondes} secondes` 
    })
},1000)

