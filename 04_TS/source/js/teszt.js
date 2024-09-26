function FuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny, fuggvenyhivas) {

    //Tábla elemek létrehozása
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    //Teszt paraméterek megadása és megjelenítése
    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = `${fuggvenyhivas}`
    if (elvartEredmeny == fuggvenyhivas) {
        visszajelzesMezo.innerHTML = `Success`;
    }
    else {
        visszajelzesMezo.innerHTML = `Fail`;
    }
}

//Hibás referencia érték esetén lefutó függvény
function HibasFuggvenyFuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = "Fail";
    visszajelzesMezo.innerHTML = "Fail";
}

function Teszt01() {
    try {
        FuggvenyVisszajelzoSor("Hosszú szöveg vizsgálat", "Teszt szöveg, ami hosszú...",true , isTextLong("Teszt szöveg, ami hosszú..."));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Hosszú szöveg vizsgálat", "Teszt szöveg, ami hosszú...",true , isTextLong("Teszt szöveg, ami hosszú..."));
    }
}

function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("Hosszú szöveg vizsgálat", "alma",false , isTextLong("alma"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Hosszú szöveg vizsgálat", "alma",false , isTextLong("alma"));
    }
}

function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("Hosszú szöveg vizsgálat", "123456789t",true , isTextLong("123456789t"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Hosszú szöveg vizsgálat", "123456789t",true , isTextLong("123456789t"));
    }
}

function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("Négyzet kerület számítás", 2, 8, getSquarePerimeter(2));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Négyzet kerület számítás", 2, 8, getSquarePerimeter(2));
    }
}

function Teszt05() {
    try {
        FuggvenyVisszajelzoSor("Páros számok a tömbben", [1, 5, 17, 29], 0, countEven([1, 5, 17, 29]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Páros számok a tömbben", [1, 5, 17, 29], 0, countEven([1, 5, 17, 29]));
    }
}

function Teszt06() {
    try {
        FuggvenyVisszajelzoSor("Páros számok a tömbben", ["kettő", 4, 17, 29], 1, countEven(["kettő", 4, 17, 29]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Páros számok a tömbben", ["kettő", 4, 17, 29], 1, countEven(["kettő", 4, 17, 29]));
    }
}

function Teszt07() {
    try {
        FuggvenyVisszajelzoSor("Páros számok a tömbben", ["true", 8, 2, 29], 2, countEven(["true", 8, 2, 29]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Páros számok a tömbben", ["true", 8, 2, 29], 2, countEven(["true", 8, 2, 29]));
    }
}


function TesztFuttato() {
    Teszt01();
    Teszt02();
    Teszt03();
    Teszt04();
    Teszt05();
    Teszt06();
    Teszt07();
}
TesztFuttato();