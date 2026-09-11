import assert from "node:assert/strict"
import { serialiserJsonLd } from "./json-ld"

// Les trois caractères visés sortent en échappements Unicode, jamais bruts.
const sortie = serialiserJsonLd({ name: "IA & automatisation", note: "Node < 20 > 18" })
assert.ok(!sortie.includes("&"), "aucun & brut")
assert.ok(!sortie.includes("<"), "aucun < brut")
assert.ok(!sortie.includes(">"), "aucun > brut")
assert.ok(sortie.includes("\\u0026"), "& encodé")

// Et surtout : un parseur retrouve exactement la valeur d'origine.
assert.deepEqual(JSON.parse(sortie), { name: "IA & automatisation", note: "Node < 20 > 18" })

// Le cas qui casse une page : </script> dans un titre ne doit plus fermer la balise.
const dangereux = serialiserJsonLd({ headline: "Pourquoi j'ai retiré </script> du HTML" })
assert.ok(!dangereux.includes("</script>"), "</script> neutralisé")
assert.equal(JSON.parse(dangereux).headline, "Pourquoi j'ai retiré </script> du HTML")

// Une chaîne ressemblant à une entité HTML doit survivre au dé-échappement de Google.
const entite = serialiserJsonLd({ t: "Astuces &copy; 2026" })
assert.ok(!entite.includes("&copy;"), "entité neutralisée avant lecture par Google")
assert.equal(JSON.parse(entite).t, "Astuces &copy; 2026")

// Les accents restent lisibles : pas d'échappement inutile.
assert.ok(serialiserJsonLd({ t: "Développeur" }).includes("Développeur"))

console.log("serialiserJsonLd : OK")
