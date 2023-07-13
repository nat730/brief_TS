
export function exo4_1() {

    const candidats = ["lepeigne", "melangeons", "macreau", "varousselle", "paicvaissrelle", "poutoutout", "hidalgogo"];
    let votes = candidats.map(() => {
        return 0
    })



    for (let index = 0; index < 1000; index++) {
        const i = Math.floor(Math.random() * candidats.length)
        votes[i] = votes[i] + 1
    }

    votes.forEach((nbvotes, indexcandidats) => {
        console.log(candidats[indexcandidats] + " a eu " + nbvotes + " votes")
    })

    let second_tour = votes.filter((element) => {
        return element < (Math.max(...votes));
    })
    const gagnants: number[] = []
    votes.forEach((element, index) => {
        if (element === (Math.max(...votes))) {
            gagnants.push(index)
        }
    });


    gagnants.forEach((indexGagnant) => {
        console.log("le gagnant(e) est ", candidats[indexGagnant], " avec ", votes[indexGagnant], " votes");
    })

    if (gagnants.length < 2) {
        const second: number[] = []
    second_tour.forEach((element, index) => {
        if (element === (Math.max(...votes))) {
            second.push(index)
        
            second.forEach((indexsecond) => {
                console.log("le 2nd tour est ", candidats[indexsecond], " avec ", votes[indexsecond], " votes");
            })
        }});
    
    
    }











    }