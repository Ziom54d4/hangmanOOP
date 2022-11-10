import { game } from "./Game.js";

export class Hasla {
    constructor(hasla, indeksWylosowanegoHasla) {
        this.hasla = hasla;
        this.indeksWylosowanegoHasla = indeksWylosowanegoHasla;
    }

    losowanieHasla() {
        const haslo = this.hasla[this.indeksWylosowanegoHasla].nazwa.toLowerCase();
        return haslo;
    }

    zakreskowanieHasla(haslo) {
        let zakreskowaneHaslo = "";
        for(let char of haslo) {
            if(char == " ") {
                zakreskowaneHaslo+=" ";
            } else {
                zakreskowaneHaslo+="_";
            }
        }
        return zakreskowaneHaslo;
    }

    wyswietlanieZakreskowanegoHasla(elementHasla, zakreskowaneHaslo) {
        elementHasla.textContent = zakreskowaneHaslo;
    }

    sprawdzenieCzyWszystkieLiteryOdsloniete(haslo) {
        if(elementHasla.textContent === haslo) {
            game.koniecGry("wygrana");
        }
    }
}

export const elementHasla = document.getElementById("hasla");