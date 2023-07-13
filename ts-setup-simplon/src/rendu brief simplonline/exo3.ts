export function exo3() {
    console.log('nourrir cas 1', nourrir(800, 2))
    console.log('nourrir cas 2', nourrir(20, 2))
    console.log('nourrir cas 3', nourrir(800, 5))
}       

function nourrir(stockFoin:number, nbMouton:number) {
    const nourriture_jour = 0.25;
    let jour = 0;

    while (jour <1000 && stockFoin >0) {
        stockFoin = stockFoin-(nourriture_jour*nbMouton);
        jour=jour+1;
    }
    
    if (stockFoin >0) {
        nbMouton = nbMouton-1;    
    }
    
    
    while (stockFoin > 0) {
        stockFoin = stockFoin-(nourriture_jour*nbMouton);
        jour=jour+1;
    }
    return jour
}
