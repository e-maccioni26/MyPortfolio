import assert from "node:assert/strict"
import { tronquer } from "./blog-utils"

// Un texte court sort intact.
assert.equal(tronquer("Court et net."), "Court et net.")

// Un texte long sort sous la limite, coupé entre deux mots, avec des points de suspension.
const long = "Un article sur la sécurité des paquets npm et ce que cela change pour les équipes ".repeat(5)
const sortie = tronquer(long, 155)
assert.ok(sortie.length <= 155, `${sortie.length} caractères`)
assert.ok(sortie.endsWith("…"))
const sansPoints = sortie.slice(0, -1)
assert.ok(long.startsWith(sansPoints), "préfixe fidèle du texte d'origine")
assert.ok(long[sansPoints.length] === " ", "coupé à une frontière de mot")

// Pile à la limite : rien n'est coupé.
const pile = "a".repeat(155)
assert.equal(tronquer(pile, 155), pile)

console.log("tronquer : OK")
