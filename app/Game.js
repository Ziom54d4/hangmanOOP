import {Hasla, elementHasla} from "./Hasla.js";
import {Buzki, elementBuzki} from './Buzki.js';
import {Litery, elementLitery} from './Litery.js';
import {Kategorie, elementKategoria} from './Kategorie.js';
import {Rezultat, elementRezultat} from './Rezultat.js';
import {Odswiezenie, elementOdswiezenie} from './Odswiezenie.js';

class Game {
    constructor(hasla) {
        this.hasla = hasla;
    }

    startGry() {
        // tutajBuzki
        const buzki = new Buzki();
        buzki.ustawienieOpacityBuziek(elementBuzki);

        // tutajHasla
        const iloscHasel = this.hasla.length;
        const indeksWylosowanegoHasla = Math.floor(Math.random()*iloscHasel);
        const hasla = new Hasla(this.hasla, indeksWylosowanegoHasla);
        const haslo = hasla.losowanieHasla();
        const zakreskowaneHaslo = hasla.zakreskowanieHasla(haslo);
        hasla.wyswietlanieZakreskowanegoHasla(elementHasla, zakreskowaneHaslo);

        // tutajKategoria
        const kategorie = new Kategorie(elementKategoria, this.hasla, indeksWylosowanegoHasla);
        const kategoria = kategorie.losowanieKategorii();
        kategorie.wyswietlenieKategorii(kategoria);

        // tutajLitery
        const licznikBuzki = 0;
        const litery = new Litery(haslo, zakreskowaneHaslo, licznikBuzki, elementHasla);
        litery.ktoraLiteraKliknieta(elementLitery);
    }

    koniecGry(przegranaCzyWygrana) {
        const litery = new Litery();
        litery.wylaczenieLiter(elementLitery);
        const rezultat = new Rezultat(elementRezultat);
        if(przegranaCzyWygrana == "przegrana") {
            const negatywnyRezultat = "Niestety nie udało się - Przegrana!";
            rezultat.wyswietlNegatywnyRezultat(negatywnyRezultat);
        } else if(przegranaCzyWygrana == "wygrana") {
            const pozytywnyRezultat = "Hasło odkryte - Wygrana!";
            rezultat.wyswietlPozytywnyRezultat(pozytywnyRezultat);
        }

        const btn = document.createElement("button");
        const odswiezenie = new Odswiezenie(elementOdswiezenie, btn);
        odswiezenie.wyswietlPrzyciskOdswiezania();
        odswiezenie.zrestartujGre();
    }
}

export const game = new Game([
    {
        nazwa: "Jebać PIS",
        kategoria: "Polityka",
    },
    {
        nazwa: "Skoki na chuju",
        kategoria: "Sport",
    },
    {
        nazwa: "Programista HTML",
        kategoria: "Informatyka",
    },
],
);
game.startGry();