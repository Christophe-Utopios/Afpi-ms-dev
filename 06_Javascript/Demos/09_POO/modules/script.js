import { Bibliotheque } from "./classes/Bibliotheque.js";
import { Adherent } from "./classes/Adherent.js";
import { Document } from "./classes/Document.js";

// Création d'objet à partir de la classe Bibliotheque
let aquarese = new Bibliotheque("Aquarese")
let afpi = new Bibliotheque("Afpi")
let m2i = new Bibliotheque("M2i")

// Création d'objet à partir de la classe Adherent
let toto = new Adherent("Toto", "Toto")

// Création d'objet à partir de la classe Document
let lePetitPrince = new Document("Le petit prince")

aquarese.ajouterAdherent(toto)
aquarese.ajouterDocument(lePetitPrince)
toto.emprunterLivre(lePetitPrince)

console.table(aquarese.listeAdherent);
console.table(toto.listeLivre);