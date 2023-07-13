"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exo4_1 = void 0;
function exo4_1() {
    const candidats = ["lepeigne", "melangeons", "macreau", "varousselle", "paicvaissrelle", "poutoutout", "hidalgogo"];
    let votes = candidats.map(() => {
        return 0;
    });
    for (let index = 0; index < 1000; index++) {
        const i = Math.floor(Math.random() * candidats.length);
        votes[i] = votes[i] + 1;
    }
    votes.forEach((nbvotes, indexcandidats) => {
        console.log(candidats[indexcandidats] + " a eu " + nbvotes + " votes");
    });
    const index = votes.findIndex((element) => {
        return element === (Math.max(...votes));
    });
    console.log(candidats[index]);
}
exports.exo4_1 = exo4_1;
