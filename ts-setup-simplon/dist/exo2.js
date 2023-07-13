"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exo2 = void 0;
function exo2() {
    let nombre = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    console.log(nombre);
    console.log("la 1ere valeur est", nombre[0]);
    console.log("la 4eme valeur est", nombre[3]);
    console.log("l'avant derniere valeur est", nombre[nombre.length - 2]);
    let Tableau = [];
    for (let index = 0; index < 10; index++) {
        Tableau[index] = (index + 1) * 2;
    }
    console.log(Tableau);
    console.log("la 1ere valeur est", Tableau[0]);
    console.log("la 4eme valeur est", Tableau[3]);
    console.log("l'avant derniere valeur est", Tableau[Tableau.length - 2]);
}
exports.exo2 = exo2;
