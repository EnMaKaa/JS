function sayiUret(ustlimit = 49) {
    return (Math.ceil(Math.random() * ustlimit))
}

sayiUret() 

var sayi1 = sayiUret(154)
var sayi2 = sayiUret()
var sayi3 = sayiUret()
var sayi4 = sayiUret()
var sayi5 = sayiUret()
var sayi6 = sayiUret()
console.log('Kolon : ' + sayi1 + ' ' + sayi2 + ' ' + sayi3 + ' ' + sayi4 + ' ' + sayi5 + ' ' + sayi6)
