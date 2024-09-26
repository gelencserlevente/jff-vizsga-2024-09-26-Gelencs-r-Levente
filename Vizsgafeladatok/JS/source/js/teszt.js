//Céges átlagfizetés feladat tesztje


//Vizsgált objektum:
const employees = [{
    name: "Koaxk Ábel",
    salary: 400000,
    role: "Rendszergazda"
},
{
    name: "Zsíros B. Ödön",
    salary: 1200000,
    role: "Ügyvezető Igazgató"
},
{
    name: "Meg Győző",
    salary: 600000,
    role: "Marketing Manager"
},
{
    name: "Békés Csaba",
    salary: 180000,
    role: "Takarító"
},
{
    name: "Pofá Zoltán",
    salary: 300000,
    role: "Biztonsági Őr"
},
{
    name: "Fejet Lenke",
    salary: 220000,
    role: "Irodai Titkár"
},
{
    name: "Vak Cina",
    salary: 500000,
    role: "Üzem Orvos"
}
];

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
        FuggvenyVisszajelzoSor("Felnőtt -e", 16, false,isAdult(16));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Felnőtt -e", 16, false,isAdult(16));
    }
}
function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("Felnőtt -e", 19, true,isAdult(19));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Felnőtt -e", 19, true,isAdult(16));
    }
}
function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("Felnőtt -e", 18, true,isAdult(18));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Felnőtt -e", 18, true,isAdult(18));
    }
}

function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("Nagybetű számolás", "Szeretem a Programozást",2, countUpperCase("Szeretem a Programozást"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Nagybetű számolás", "Szeretem a Programozást",2, countUpperCase("Szeretem a Programozást"));
    }
}
function Teszt05() {
    try {
        FuggvenyVisszajelzoSor("Nagybetű számolás", "TESZT szöveg",5, countUpperCase("TESZT szöveg"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Nagybetű számolás", "TESZT szöveg",5, countUpperCase("TESZT szöveg"));
    }
}
function Teszt06() {
    try {
        FuggvenyVisszajelzoSor("Nagybetű számolás", "Teszt Elek",2, countUpperCase("Teszt Elek"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Nagybetű számolás", "Teszt Elek",2, countUpperCase("Teszt Elek"));
    }
}


function Teszt07() {
    try {
        FuggvenyVisszajelzoSor("Cég átlagfizetés", "Objektum", 485714, getAvgSalary(employees));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Cég átlagfizetés", "Objektum", 485714);
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