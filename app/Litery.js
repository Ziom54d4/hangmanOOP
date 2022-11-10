import { Buzki } from "./Buzki.js";
import { Hasla } from "./Hasla.js";
import { elementBuzki } from "./Buzki.js";

export class Litery {
    constructor(haslo, zakreskowaneHaslo, licznikBuzki, elementHasla) {
        this.haslo = haslo;
        this.zakreskowaneHaslo = zakreskowaneHaslo;
        this.licznikBuzki = licznikBuzki;
        this.elementHasla = elementHasla;
    }

    //TODO: zazwyczsaj metody o takim sposobie nazewnictwa nie zmieniają stanu, a zwracają boolean
    ktoraLiteraKliknieta(elementLitery) {
        const dzieciIdLitery = elementLitery.children;
        const iloscDzieciIdLitery = elementLitery.children.length;
        for(let i=0; i<iloscDzieciIdLitery; i++) {
            dzieciIdLitery[i].addEventListener("click", () => {
                this.czyTrafionaLitera(dzieciIdLitery[i].textContent);
            })
        }
    }

    //TODO: zazwyczsaj metody o takim sposobie nazewnictwa nie zmieniają stanu, a zwracają boolean
    czyTrafionaLitera(litera) {
        if(this.haslo.indexOf(litera) == -1) {
            const buzki = new Buzki(this.licznikBuzki++);
            buzki.ustawienieKolejnejBuzki(elementBuzki);
        } else {
            for(let i=0; i<this.haslo.length; i++) {
                this.zakreskowaneHaslo = this.zakreskowaneHaslo.toString().replace(',','');
            }
            this.zakreskowaneHaslo = this.zakreskowaneHaslo.split('');
            for(let i=0; i<this.haslo.length; i++) {
                if(litera == this.haslo[i]) {
                    this.zakreskowaneHaslo[i]=this.haslo[i];
                }
            }
            for(let i=0; i<this.haslo.length; i++) {
                this.zakreskowaneHaslo = this.zakreskowaneHaslo.toString().replace(',','');
            }
            this.elementHasla.textContent = this.zakreskowaneHaslo;
            const hasla = new Hasla();
            hasla.sprawdzenieCzyWszystkieLiteryOdsloniete(this.haslo);
        }
    }

    wylaczenieLiter(elementLitery) {
        const dzieciIdLitery = elementLitery.children;
        const iloscDzieciIdLitery = elementLitery.children.length;
        for(let i=0; i<iloscDzieciIdLitery; i++) {
            dzieciIdLitery[i].disabled = true;
        }
    }
}

export const elementLitery = document.getElementById("litery");