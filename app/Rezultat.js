export class Rezultat {
    constructor(elementRezultat) {
        this.elementRezultat = elementRezultat;
    }

    wyswietlNegatywnyRezultat(negatywnyRezultat) {
        this.elementRezultat.style.color = "red";
        this.elementRezultat.textContent = negatywnyRezultat;
    }

    wyswietlPozytywnyRezultat(pozytywnyRezultat) {
        this.elementRezultat.style.color = "green";
        this.elementRezultat.textContent = pozytywnyRezultat;
    }
}

export const elementRezultat = document.getElementById("rezultat");