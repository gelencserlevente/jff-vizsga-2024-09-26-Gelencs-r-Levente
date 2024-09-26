function ujVisszajelzoSor(tesztneve, visszajelzes) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var visszajelzesMezo = adatSor.insertCell(1);
    tesztNeveMezo.innerHTML = `${tesztneve}`;
    visszajelzesMezo.innerHTML = `${visszajelzes}`;
}

function teszt01() {
    try {
        let tesztElem = document.querySelector("h1");
        if (tesztElem.style.textTransform == "uppercase") {
            ujVisszajelzoSor("1-es szintű címsor betű átalakítás", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("1-es szintű címsor betű átalakítás", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("1-es szintű címsor betű átalakítás", "HIBA");
    }
}


function teszt02() {
    try {
        let tesztElem = document.querySelector("h1");
        if (tesztElem.innerHTML == "Fontos alapelemek") {
            ujVisszajelzoSor("1-es szintű címsor tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("1-es szintű címsor tartalma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("1-es szintű címsor tartalma", "HIBA");
    }
}

function teszt03() {
    try {
        let tesztElem = document.querySelectorAll("td");
        let osszevont = 0;
        for (let i = 0; i < tesztElem.length; i++) {

            if (tesztElem[i].rowSpan == "5") {
                osszevont++;
            }
        }
        if (osszevont == 2) {
            ujVisszajelzoSor("Táblázat cella összevonások", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Táblázat cella összevonások", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Táblázat cella összevonások", "HIBA");
    }
}



function teszt04() {
    try {
        let tesztElem = document.querySelectorAll("img");
        if (tesztElem[0].src.includes("JS_logo.png")) {
            ujVisszajelzoSor("JS kép forrás", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("JS kép forrás", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("JS kép forrás", "HIBA");
    }
}

function teszt05() {
    try {
        let tesztElem = document.querySelectorAll("img");
        if (tesztElem[0].alt == "JS logo") {
            ujVisszajelzoSor("JS kép alternatív szöveg", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("JS kép alternatív szöveg", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("JS kép alternatív szöveg", "HIBA");
    }
}

function teszt06() {
    try {
        let tesztElem = document.querySelectorAll("img");
        if (tesztElem[0].title == "JS logo") {
            ujVisszajelzoSor("JS kép címke", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("JS kép címke", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("JS kép címke", "HIBA");
    }
}

function teszt07() {
    try {
        let tesztElem = document.querySelectorAll("img");
        if (tesztElem[1].src.includes("TS_logo.png")) {
            ujVisszajelzoSor("TS kép forrás", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("TS kép forrás", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("TS kép forrás", "HIBA");
    }
}
function teszt08() {
    try {
        let tesztElem = document.querySelectorAll("img");
        if (tesztElem[1].alt == "TS logo") {
            ujVisszajelzoSor("TS kép alternatív szöveg", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("TS kép alternatív szöveg", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("TS kép alternatív szöveg", "HIBA");
    }
}

function teszt09() {
    try {
        let tesztElem = document.querySelectorAll("img");
        if (tesztElem[1].title == "TS logo") {
            ujVisszajelzoSor("TS kép címke", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("TS kép címke", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("TS kép címke", "HIBA");
    }
}

function teszt10() {
    try {
        let tesztElem = document.querySelectorAll("a");
        if (tesztElem[0].href == "https://hu.wikipedia.org/wiki/JavaScript") {
            ujVisszajelzoSor("JS forrás link útvonal", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("JS forrás link útvonal", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("JS forrás link útvonal", "HIBA");
    }
}

function teszt11() {
    try {
        let tesztElem = document.querySelectorAll("a");
        if (tesztElem[1].href == "https://en.wikipedia.org/wiki/TypeScript") {
            ujVisszajelzoSor("TS forrás link útvonal", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("TS forrás link útvonal", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("TS forrás link útvonal", "HIBA");
    }
}

function teszt12() {
    try {
        let tesztElem = document.querySelectorAll("a");
        if (tesztElem[0].target == "_blank" && tesztElem[1].target == "_blank") {
            ujVisszajelzoSor("Linkek új ablakban", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Linkek új ablakban", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Linkek új ablakban", "HIBA");
    }
}

function teszt13() {
    try {
        let tesztElem = document.querySelectorAll("p");
        if (tesztElem[0].classList == "forras" && tesztElem[1].classList == "forras") {
            ujVisszajelzoSor("Bekezdésekhez tartozó osztály", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Bekezdésekhez tartozó osztály", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Bekezdésekhez tartozó osztály", "HIBA");
    }
}

function allTeszt() {
    teszt01();
    teszt02();
    teszt03();
    teszt04();
    teszt05();
    teszt06();
    teszt07();
    teszt08();
    teszt09();
    teszt10();
    teszt11();
    teszt12();
    teszt13();
}
allTeszt();
