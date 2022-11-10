import { game } from "./Game.js";

export class Buzki {
    constructor(licznikBuzki) {
        this.licznikBuzki = licznikBuzki;
    }

    ustawienieOpacityBuziek(elementBuzki) {
        const iloscBuziek = elementBuzki.children.length;
        for(let i=0; i<iloscBuziek; i++) {
            if(i === 0) {
                elementBuzki.children[i].style.opacity = "1.0";
            } else {
                elementBuzki.children[i].style.opacity = "0.3";
            }
        }
    }

    ustawienieKolejnejBuzki(elementBuzki) {
        const iloscBuziek = elementBuzki.children.length;
        if(this.licznikBuzki <= iloscBuziek - 2) {
            elementBuzki.children[this.licznikBuzki].style.opacity = "0.3";
            elementBuzki.children[this.licznikBuzki+1].style.opacity = "1.0";
        }

        if(this.licznikBuzki == iloscBuziek-2) {
            game.koniecGry("przegrana");
        }
    }
}

export const elementBuzki = document.getElementById("buzki");