"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exo4 = void 0;
function exo4() {
    const candidats = ["lepeigne", "melangeons", "macreau", "varousselle", "paicvaissrelle", "poutoutout", "hidalgogo"];
    const totalVotes = 1000;
    let Tableau = [];
    let votes_restant = totalVotes;
    let votes = candidats.map(() => {
        return 0;
    });
    console.log(votes);
    for (let index = 0; index < 1000; index++) {
        const i = Math.floor(Math.random() * candidats.length);
        votes[i] = votes[i] + 1;
    }
    console.log(votes);
    votes.forEach((nbvotes, indexcandidats) => {
        console.log(candidats[indexcandidats] + " a eu " + nbvotes + " votes");
    });
    console.log(candidats);
}
exports.exo4 = exo4;
