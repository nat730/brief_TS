export function exo5() {
    /*# Brief 2 débutants
    
    ## Le petit train de la vie ou de la m...
    
    Dans la vie on peut faire des choix, et ces choix ont des conséquences...
    Patchoupi le train offre un voyage inoubliable.
    10 Wagons sont disponibles, ils sont numérotés de 3 à 12.
    Le nombre de passagers initiaux dans chaque wagon est égal au triple du numéro du wagon.
    Le train avance à une vitesse de 92km/h.
    Chaque minute, un passager est débarqué du train dans un wagon aléatoire.
    Lorsqu'un wagon est vide, il est enlevé du train.
    Lorsque un wagon est enlevé du train, la vitesse augmente de 10km/h.
    
    1. Ecrire le programme qui affiche chaque minute (fictive) :
    - le nombre de passagers dans chaque wagon
    - la vitesse du train
    - le nombre de kilomètres parcourus
    
    2. Ecrire à la fin du programme, le nombre de kilomètres parcourus.
    
    3. Calculer la moyenne, sur 100 voyages, du nombre de kilomètres parcourus. */
    let km = 0
    let km1=0
    let vitesse = 92;
    let min = 0;
    let wagon = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let passager = wagon.map((element) => {
        return element * 3;
    });

    for (let index = 0; index < 1000; index++) {
        while (passager.length > 0) {
            console.log("la vitesse du train avec ", passager, " passager est de " + vitesse + " km/h");
            let i = Math.floor(Math.random() * passager.length);
            if (passager[i] > 0) {
                passager[i] = passager[i] - 1;
            }
            if (passager[i] === 0) {
                passager = passager.filter((value) => value > 0);
                vitesse = vitesse + 10;
                console.log("la vitesse du train avec " + passager.length + " wagon est de " + vitesse + " km/h");
            }
            km = km + vitesse/60
            min = min + 1
            console.log("le train a parcouru " + km + "km");
        }

        km1 = km+km1
        km = 0
        vitesse = 92
        passager = wagon.map((element) => {
            return element * 3;
        });
        
    }
    km1=km1/1000
    console.log("en moyenne le train a parcouru " + km1 + "km");
}