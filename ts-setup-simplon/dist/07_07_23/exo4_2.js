"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exo4_2 = void 0;
function exo4_2() {
    let sousP = 1000;
    const prixvoix = 10;
    const candidats = ["lepeigne", "melangeons", "macreau", "varousselle", "paicvaissrelle", "poutoutout", "hidalgogo"];
    let votes = candidats.map(() => {
        return 0;
    });
    let Lepeigne = candidats.findIndex((nom) => { return nom === "lepeigne"; });
    let Paicvesrelle = candidats.findIndex((nom) => { return nom === "paicvaisrelle"; });
    for (let index = 0; index < 1000; index++) {
        const i = Math.floor(Math.random() * candidats.length);
        votes[i] = votes[i] + 1;
        while (votes[Lepeigne] >= votes[Paicvesrelle] && sousP > 0) {
            votes[Lepeigne]--;
            votes[Paicvesrelle]++;
            sousP = sousP - prixvoix;
        }
    }
    votes.forEach((nbvotes, indexcandidats) => {
        console.log(candidats[indexcandidats] + " a eu " + nbvotes + " votes");
    });
    const index = votes.findIndex((element) => {
        return element === (Math.max(...votes));
    });
    let second_tour = votes.filter((element) => {
        return element < (Math.max(...votes));
    });
    let index2 = second_tour.findIndex((element) => {
        return element === (Math.max(...second_tour));
    });
    console.log("le gagnant(e) est " + candidats[index] + " avec " + votes[index] + " votes");
    console.log("il se partagera le 2nd tour avec " + candidats[index2] + " qui a " + votes[index2] + " votes");
    console.log("paicvaissrelle peut encore acheter " + sousP / prixvoix + " voix");
}
exports.exo4_2 = exo4_2;
