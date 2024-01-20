function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}

function parosDarab(szamok) {
    var parosIndexek = [];
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 === 0) {
            parosIndexek.push(szamok[i]);
        }
    }
    return parosIndexek.length;
}

function fuggvenyhivasPalindrom(fuggveny) {
    var eredmeny = fuggveny().replace(/\s/g, '');
    var palindrom = eredmeny === eredmeny.split('').reverse().join('');
    return palindrom;
}
