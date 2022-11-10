export class Kategorie {
    constructor(elementKategoria, hasla, indeksWylosowanegoHasla) {
        this.elementKategoria = elementKategoria;
        this.hasla = hasla;
        this.indeksWylosowanegoHasla = indeksWylosowanegoHasla;
    }

    losowanieKategorii() {
        const kategoria = this.hasla[this.indeksWylosowanegoHasla].kategoria.toUpperCase();
        return kategoria;
    }

    wyswietlenieKategorii(kategoria) {
        this.elementKategoria.textContent = kategoria;
    }
}

export const elementKategoria = document.getElementById("kategoria");