// Boucle for

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// break => coupe la boucle
let toto = 10
for (let j = 1; j <= toto; j++) {
    if (j == 5) {
        break
    }
    console.log(j)
}

// continue => saute une itération
for (let k = 1; k <= 10; k++) {
    if (k == 5) {
        continue
    }
    console.log(k);
}