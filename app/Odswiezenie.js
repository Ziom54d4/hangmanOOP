export class Odswiezenie {
    constructor(elementOdswiezenie, btn) {
        this.elementOdswiezenie = elementOdswiezenie;
        this.btn = btn;
    }

    wyswietlPrzyciskOdswiezania() {
        this.btn.innerHTML = "Jeszcze raz?";
        this.elementOdswiezenie.appendChild(this.btn);
    }

    zrestartujGre() {
        this.btn.addEventListener("click", () => {
            document.location.reload();
        })
    }
}

export const elementOdswiezenie = document.getElementById("odswiezenie");