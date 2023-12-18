let compte = -300

if (compte > 0) {
    console.log("Votre compte est créditeur !");
}

if(compte < 0) {
    console.log("Votre compte est débiteur !");
}

// Si ... Sinon ...

if (compte > 0) {
    console.log("Votre compte est créditeur !");
} else {
    console.log("Votre compte est débiteur !");
}

// Sinon ... Si

if (compte > 0) {
    console.log("Votre compte est créditeur !");
} else if (compte == 0) {
    console.log("Votre compte est à 0");
} else {
    console.log("Votre compte est débiteur !");
}

let estVrai = true

if (estVrai) {
    console.log("C'est vrai");
} else {
    console.log("c'est faux");
}

console.log(1 === 1); // === => sert à comparer la valeur ET le type // Vrai
console.log("1" === 1); // Faux
console.log(1 == 1); // == => sert à comparer UNIQUEMENT la valeur // Vrai
console.log("1" == 1); // Vrai
console.log(1 != 1); // != => sert à notifier une différence // Faux
console.log(3 != 1); // Vrai
console.log(3 !== 3); // !== => sert à notifier une différence avec la valeur ET le type

/*
    Opérateur logique || => OU
    Opérateur logique && => ET
    Opérateur logique ! => Contraire de ...
*/

let estVrai2 = true

if(!estVrai2) {
    console.log("C'est faux");
} else {
    console.log("C'est vrai");
}