function sayiUret(ustlimit = 49) {
    return (Math.ceil(Math.random() * ustlimit))
}
for (var j=1; j<=8; j++){
    console.log("KOLON")
    for (var i = 1; i <= 6; i++) {
        console.log(sayiUret())
    }
}
 

