function osszesOszto(szam:number):number[]{
    var osztok:number[] = [];

    for (let i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }

    return osztok;
}

function parosDarab(szamok:number[]):number{
    var parosIndexek:number[] = [];

    for (let i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 === 0) {
            parosIndexek.push(szamok[i]);
        }
    }

    return parosIndexek.length;
}





function fuggvenyhivasPalindrom(fuggveny: () => string): boolean {

    var eredmeny: string = fuggveny().replace(/\s/g, '');


    var palindrom: boolean = eredmeny === eredmeny.split('').reverse().join('');

    return palindrom;
}