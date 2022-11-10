import {Hasla, elementHasla} from "./Hasla.js";
import {Buzki, elementBuzki} from './Buzki.js';
import {Litery, elementLitery} from './Litery.js';
import {Kategorie, elementKategoria} from './Kategorie.js';
import {Rezultat, elementRezultat} from './Rezultat.js';
import {Odswiezenie, elementOdswiezenie} from './Odswiezenie.js';

//TODO: ogólnie przerabiałeś kurs Reacta to przypomnij sobie jak tam się projektowało:
//jakiś znaczący element graficzny miał reprezentację w postaci klasy-> obiektu(ów)
//strzelamL np. każda litera mogłaby być obiektem.
//Poza tym widać, że włożyłeś w to dużo pracy i jest całkiem spoko jak na pierwszy raz.
class Game {
    constructor(hasla) {
        this.hasla = hasla;
    }

    startGry() {
        //TODO: usuń te komentarze bo nic nie wnoszą
        // tutajBuzki
        const buzki = new Buzki();
        //TODO: metody/funkcje powinny zaczynać się od czasownika tak jak zmieniłem np. poniżej
        buzki.ustawOpacityBuziek(elementBuzki);

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

    //TODO: staraj się żeby nie było dwukierunkowych powiązań między klasami: np. klasa Buzki nie powinna nic wiedzieć o Game
    //to samo tyczy się jeszcze paru miejsc ale napisałem tylko tu
    //Struktura wywołan powinna być raczej drzewiasta lub liniowa i przebiegać w jednym kierunku z góry w dół, zaczynając się w Game    
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

//TODO: jako, że np. Buzki nie powinna wiedzieć o Game to wtedy ten export poniżej nie byłby chyba potrzebny
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